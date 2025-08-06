const questions = [
    {
        id: 1,
        question: "Which activities do you enjoy the most?",
        options: [
            "Solving complex problems",
            "Creating visual designs",
            "Working with people",
            "Analyzing data"
        ]
    },
    {
        id: 2,
        question: "What type of work environment do you prefer?",
        options: [
            "Fast-paced startup",
            "Established corporation",
            "Remote work",
            "Flexible environment"
        ]
    }
];

let currentQuestion = 0;
const answers = {};

function renderQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    const html = `
        <div>
            <h3 class="text-xl mb-4">${question.question}</h3>
            <div class="space-y-3">
                ${question.options.map((option, index) => `
                    <button
                        onclick="handleAnswer('${option}')"
                        class="w-full p-3 text-left rounded-lg hover:bg-blue-50 border border-gray-200"
                    >
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div class="mt-4 text-gray-600">
                Question ${currentQuestion + 1} of ${questions.length}
            </div>
        </div>
    `;

    quizContainer.innerHTML = html;
}

function handleAnswer(answer) {
    answers[currentQuestion] = answer;
    currentQuestion++;
    renderQuestion();
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="text-center">
            <h3 class="text-xl mb-4">Assessment Complete!</h3>
            <p>Based on your answers, we recommend the following career paths...</p>
            <div class="mt-4">
                <a href="career-path.html" class="inline-block bg-blue-500 text-white px-4 py-2 rounded">
                    View Career Path
                </a>
            </div>
        </div>
    `;
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', renderQuestion); 