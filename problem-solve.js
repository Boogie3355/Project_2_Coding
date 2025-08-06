// Language configurations
const languageConfigs = {
    javascript: {
        id: 'javascript',
        name: 'JavaScript',
        extension: 'js',
        commentStart: '//',
        tabSize: 2
    },
    python: {
        id: 'python',
        name: 'Python',
        extension: 'py',
        commentStart: '#',
        tabSize: 4
    },
    java: {
        id: 'java',
        name: 'Java',
        extension: 'java',
        commentStart: '//',
        tabSize: 4
    },
    cpp: {
        id: 'cpp',
        name: 'C++',
        extension: 'cpp',
        commentStart: '//',
        tabSize: 2
    },
    c: {
        id: 'c',
        name: 'C',
        extension: 'c',
        commentStart: '//',
        tabSize: 2
    },
    csharp: {
        id: 'csharp',
        name: 'C#',
        extension: 'cs',
        commentStart: '//',
        tabSize: 4
    },
    php: {
        id: 'php',
        name: 'PHP',
        extension: 'php',
        commentStart: '//',
        tabSize: 4
    }
};

// Initialize Monaco Editor
require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' }});

// Load additional language features
require([
    'vs/basic-languages/cpp/cpp.contribution',
    'vs/basic-languages/csharp/csharp.contribution',
    'vs/basic-languages/php/php.contribution'
], function() {
    // Languages are now loaded
});

require(['vs/editor/editor.main'], function() {
    const urlParams = new URLSearchParams(window.location.search);
    const problemId = parseInt(urlParams.get('id'));
    const problem = getProblemById(problemId);

    // Set problem details
    document.getElementById('problem-title').textContent = problem.title;
    document.getElementById('problem-difficulty').textContent = problem.difficulty;
    document.getElementById('problem-difficulty').className = `px-3 py-1 rounded-full text-sm ${
        problem.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
        problem.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
    }`;
    
    document.getElementById('problem-description').innerHTML = problem.description;
    
    // Render examples
    const examplesContainer = document.getElementById('problem-examples');
    examplesContainer.innerHTML = problem.examples.map((example, index) => `
        <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 class="font-bold mb-3">Example ${index + 1}:</h4>
            <div class="space-y-3">
                <div class="font-mono bg-gray-100 p-3 rounded">
                    <div><span class="text-gray-600">Input:</span> ${example.input}</div>
                    <div><span class="text-gray-600">Output:</span> ${example.output}</div>
                </div>
                ${example.explanation ? `
                    <div class="text-gray-600">
                        <span class="font-semibold">Explanation:</span> ${example.explanation}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Render constraints
    const constraintsContainer = document.getElementById('problem-constraints');
    constraintsContainer.innerHTML = problem.constraints.map(constraint => `
        <li class="text-gray-700">${constraint}</li>
    `).join('');
    
    // Initialize editor
    window.editor = monaco.editor.create(document.getElementById('editor'), {
        value: problem.starterCode.javascript,
        language: 'javascript',
        theme: 'vs-dark',
        minimap: { enabled: false },
        automaticLayout: true,
        fontSize: 14,
        lineHeight: 24,
        padding: { top: 10, bottom: 10 },
        scrollBeyondLastLine: false,
        folding: true,
        lineNumbers: 'on',
        roundedSelection: false,
        renderIndentGuides: true,
        rulers: [],
        wordWrap: 'on',
        contextmenu: true,
        quickSuggestions: true,
        snippets: true,
        suggest: {
            snippetsPreventQuickSuggestions: false,
            showKeywords: true,
            showClasses: true,
            showFunctions: true,
            showVariables: true,
            showModules: true
        },
        bracketPairColorization: {
            enabled: true
        },
        autoClosingBrackets: 'always',
        autoClosingQuotes: 'always',
        formatOnPaste: true,
        formatOnType: true
    });

    // Register language-specific completions
    monaco.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems: function(model, position) {
            return {
                suggestions: [
                    {
                        label: 'function',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'function ${1:name}(${2:params}) {\n\t${0}\n}',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Function definition'
                    },
                    // Add more snippets here
                ]
            };
        }
    });
});

// Add discussion section to the UI
function initializeDiscussions() {
    const discussionsContainer = document.createElement('div');
    discussionsContainer.className = 'mt-8 bg-white rounded-lg shadow-md p-6';
    discussionsContainer.innerHTML = `
        <h3 class="text-xl font-bold mb-4">Discussions</h3>
        <div id="discussions-list" class="space-y-4"></div>
        <div class="mt-4">
            <textarea 
                id="new-discussion" 
                class="w-full p-2 border rounded"
                placeholder="Add to the discussion..."
            ></textarea>
            <button 
                onclick="addDiscussion()"
                class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Post
            </button>
        </div>
    `;
    document.querySelector('.container').appendChild(discussionsContainer);
    
    renderDiscussions();
}

function renderDiscussions() {
    const problemId = parseInt(new URLSearchParams(window.location.search).get('id'));
    const discussions = discussionSystem.getDiscussions(problemId);
    const container = document.getElementById('discussions-list');
    
    container.innerHTML = discussions.map(discussion => `
        <div class="border-b pb-4">
            <div class="flex justify-between items-start">
                <div>
                    <span class="font-medium">${discussion.userId}</span>
                    <span class="text-gray-500 text-sm">
                        ${new Date(discussion.timestamp).toLocaleDateString()}
                    </span>
                </div>
            </div>
            <p class="mt-2">${discussion.content}</p>
            <div class="ml-8 mt-2 space-y-2">
                ${discussion.replies.map(reply => `
                    <div class="bg-gray-50 p-2 rounded">
                        <span class="font-medium">${reply.userId}</span>: ${reply.content}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function addDiscussion() {
    const content = document.getElementById('new-discussion').value;
    if (!content.trim()) return;
    
    const problemId = parseInt(new URLSearchParams(window.location.search).get('id'));
    discussionSystem.addDiscussion(problemId, content, 'current_user'); // Replace with actual user ID
    document.getElementById('new-discussion').value = '';
    renderDiscussions();
}

// Enhanced code execution
let isDarkTheme = true;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    monaco.editor.setTheme(isDarkTheme ? 'vs-dark' : 'vs-light');
}

function runCode() {
    const code = window.editor.getValue();
    const output = document.getElementById('output');
    output.classList.remove('hidden');
    
    try {
        const problem = getProblemById(parseInt(new URLSearchParams(window.location.search).get('id')));
        const testCase = problem.testCases[0];
        const language = document.getElementById('language-select').value;
        
        if (language !== 'javascript') {
            output.innerHTML = `
                <div class="text-yellow-600">
                    Note: ${languageConfigs[language].name} code execution is not supported in the browser. 
                    Please copy this code to your IDE to run it.
                    <div class="mt-2 p-2 bg-gray-100 rounded">
                        <strong>Test Case:</strong><br>
                        Input: ${JSON.stringify(testCase.input)}<br>
                        Expected Output: ${JSON.stringify(testCase.output)}
                    </div>
                </div>`;
            return;
        }
        
        const fn = new Function('return ' + code)();
        const result = fn(...Object.values(testCase.input));
        
        output.innerHTML = `
            <div class="text-lg font-bold mb-4">Sample Test Case:</div>
            <div class="space-y-3">
                <div class="bg-gray-50 p-4 rounded-lg border">
                    <div class="font-mono">
                        <div class="mb-2"><span class="font-semibold text-gray-600">Input:</span> ${JSON.stringify(testCase.input)}</div>
                        <div class="mb-2"><span class="font-semibold text-gray-600">Your Output:</span> ${JSON.stringify(result)}</div>
                        <div><span class="font-semibold text-gray-600">Expected:</span> ${JSON.stringify(testCase.output)}</div>
                    </div>
                </div>
                <div class="${JSON.stringify(result) === JSON.stringify(testCase.output) ? 'text-green-600' : 'text-red-600'}">
                    ${JSON.stringify(result) === JSON.stringify(testCase.output) ? 'Passed!' : 'Failed!'}
                </div>
            </div>
        `;
    } catch (error) {
        output.innerHTML = `<div class="text-red-600">Error: ${error.message}</div>`;
    }
}

function submitSolution() {
    const code = window.editor.getValue();
    const output = document.getElementById('output');
    output.classList.remove('hidden');
    const language = document.getElementById('language-select').value;
    
    if (language !== 'javascript') {
        output.innerHTML = `
            <div class="text-yellow-600">
                Note: ${languageConfigs[language].name} code submission is not supported in the browser. 
                Please use an IDE that supports ${languageConfigs[language].name}.
                <div class="mt-2">
                    Your code has been saved locally.
                </div>
            </div>`;
        const problemId = parseInt(new URLSearchParams(window.location.search).get('id'));
        userProgress.addSubmission(problemId, code, 'attempted', language);
        return;
    }
    
    try {
        // Run against all test cases
        const problemId = parseInt(new URLSearchParams(window.location.search).get('id'));
        const problem = getProblemById(problemId);
        const testResults = problem.testCases.map(testCase => {
            const fn = new Function('return ' + code)();
            const result = fn(...Object.values(testCase.input));
            return {
                input: testCase.input,
                output: result,
                expected: testCase.output,
                passed: JSON.stringify(result) === JSON.stringify(testCase.output)
            };
        });
        
        const allPassed = testResults.every(r => r.passed);
        
        output.innerHTML = `
            <div class="${allPassed ? 'text-green-600' : 'text-red-600'} font-bold mb-2">
                ${allPassed ? 'All Test Cases Passed!' : 'Some Test Cases Failed'}
            </div>
            <div class="space-y-2">
                ${testResults.map((result, i) => `
                    <div class="border-t pt-2">
                        <div class="font-medium">Test Case ${i + 1}:</div>
                        <div class="text-sm">Input: ${JSON.stringify(result.input)}</div>
                        <div class="text-sm">Output: ${JSON.stringify(result.output)}</div>
                        <div class="text-sm">Expected: ${JSON.stringify(result.expected)}</div>
                        <div class="text-sm ${result.passed ? 'text-green-600' : 'text-red-600'}">
                            ${result.passed ? 'Passed' : 'Failed'}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        if (allPassed) {
            userProgress.addSubmission(problemId, code, 'solved', 'javascript');
            // Add success animation
            const successIcon = document.createElement('div');
            successIcon.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 animate-bounce';
            successIcon.innerHTML = `
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>Problem Solved!</span>
            `;
            document.body.appendChild(successIcon);
            setTimeout(() => successIcon.remove(), 3000);
        }
    } catch (error) {
        output.innerHTML = `<div class="text-red-600">Error: ${error.message}</div>`;
    }
}

// Handle language change
document.getElementById('language-select').addEventListener('change', function(e) {
    const language = e.target.value;
    const config = languageConfigs[language];
    const problem = getProblemById(parseInt(new URLSearchParams(window.location.search).get('id')));
    
    // Get starter code or provide a default template
    const starterCode = problem.starterCode[language] || getDefaultTemplate(language, problem);
    window.editor.setValue(starterCode);
    
    window.editor.updateOptions({
        language: language,
        tabSize: config.tabSize,
        insertSpaces: true,
        // Language specific editor settings
        autoIndent: true,
        formatOnType: true,
        formatOnPaste: true
    });
    
    // Update UI to show language-specific information
    const output = document.getElementById('output');
    output.innerHTML = '';
    if (language !== 'javascript') {
        output.classList.remove('hidden');
        output.innerHTML = `
            <div class="text-blue-600">
                <div class="font-medium">Using ${config.name}</div>
                <div class="text-sm mt-1">
                    Note: Code execution for ${config.name} is only available in an IDE.
                    The editor provides syntax highlighting and code formatting.
                </div>
            </div>`;
    }
});

// Function to generate default templates for different languages
function getDefaultTemplate(language, problem) {
    const config = languageConfigs[language];
    switch (language) {
        case 'python':
            return `def ${problem.title.toLowerCase().replace(/\s+/g, '_')}(${getParameterList(problem, 'python')}):
    # Your code here
    pass`;
        case 'java':
            return `public class Solution {
    public ${getReturnType(problem, 'java')} ${problem.title.toLowerCase().replace(/\s+/g, '_')}(${getParameterList(problem, 'java')}) {
        // Your code here
    }
}`;
        case 'cpp':
            return `class Solution {
public:
    ${getReturnType(problem, 'cpp')} ${problem.title.toLowerCase().replace(/\s+/g, '_')}(${getParameterList(problem, 'cpp')}) {
        // Your code here
    }
};`;
        // Add more language templates as needed
        default:
            return `// ${config.name} solution for ${problem.title}\n// Your code here`;
    }
}

// Helper functions for template generation
function getParameterList(problem, language) {
    // Extract parameter types from the first test case
    const firstTest = problem.testCases[0];
    const params = Object.keys(firstTest.input);
    
    switch (language) {
        case 'python':
            return params.join(', ');
        case 'java':
            return params.map(p => `int[] ${p}`).join(', ');
        case 'cpp':
            return params.map(p => `vector<int>& ${p}`).join(', ');
        default:
            return params.join(', ');
    }
}

function getReturnType(problem, language) {
    // Infer return type from the first test case
    const firstTest = problem.testCases[0];
    const output = firstTest.output;
    
    switch (language) {
        case 'java':
            return Array.isArray(output) ? 'int[]' : 'int';
        case 'cpp':
            return Array.isArray(output) ? 'vector<int>' : 'int';
        default:
            return 'auto';
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initializeDiscussions();
}); 