function submitSolution() {
    const code = document.getElementById('code-editor').value;
    
    // Here you would typically send the code to a backend server
    // For now, we'll just show an alert
    alert('Solution submitted! In a real application, this would be evaluated.');
}

let filteredProblems = [...problems];

function renderProblems() {
    const tbody = document.getElementById('problems-list');
    tbody.innerHTML = filteredProblems.map(problem => `
        <tr class="hover:bg-gray-50 cursor-pointer" onclick="window.location.href='problem-solve.html?id=${problem.id}'">
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="h-6 w-6 rounded-full ${getProblemStatusClass(problem.id)} inline-flex items-center justify-center">
                    ${isProblemSolved(problem.id) ? 
                        '<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">'+
                            '<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>'+
                        '</svg>' : 
                        (userProgress.getProgress().attempted.includes(problem.id) ?
                            '<span class="w-2 h-2 bg-white rounded-full"></span>' : '')
                    }
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                ${problem.title}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${problem.difficulty === 'easy' ? 'bg-green-100 text-green-800' : 
                    problem.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'}">
                    ${problem.difficulty}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${problem.acceptance}
            </td>
        </tr>
    `).join('');
}

// Filter problems based on difficulty and search
function filterProblems() {
    const difficulty = document.getElementById('difficulty-filter').value;
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    filteredProblems = problems.filter(problem => {
        const matchesDifficulty = difficulty === 'all' || problem.difficulty === difficulty;
        const matchesSearch = problem.title.toLowerCase().includes(searchTerm);
        return matchesDifficulty && matchesSearch;
    });

    renderProblems();
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('difficulty-filter').addEventListener('change', filterProblems);
    document.getElementById('search-input').addEventListener('input', filterProblems);
    renderProblems();
}); 