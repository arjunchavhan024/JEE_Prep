export interface Question {
  id: number;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    subject: 'Physics',
    question: 'A particle is moving in a circular path with constant speed. What is the direction of its acceleration?',
    options: [
      'Tangential to the path',
      'Radially outward',
      'Radially inward (towards center)',
      'Zero acceleration'
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    subject: 'Physics',
    question: 'The SI unit of electric field intensity is:',
    options: [
      'Newton/Coulomb',
      'Volt/meter',
      'Joule/Coulomb',
      'Both A and B'
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    subject: 'Chemistry',
    question: 'Which of the following has the highest electronegativity?',
    options: [
      'Fluorine',
      'Oxygen',
      'Nitrogen',
      'Chlorine'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    subject: 'Chemistry',
    question: 'The hybridization of carbon in methane (CH₄) is:',
    options: [
      'sp',
      'sp²',
      'sp³',
      'sp³d'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    subject: 'Mathematics',
    question: 'If f(x) = x³ - 3x² + 4x - 5, what is f\'(x)?',
    options: [
      '3x² - 6x + 4',
      '3x² - 3x + 4',
      'x² - 6x + 4',
      '3x² - 6x - 4'
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    subject: 'Mathematics',
    question: 'What is the value of sin²θ + cos²θ?',
    options: [
      '0',
      '1',
      '2',
      'Depends on θ'
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    subject: 'Physics',
    question: 'The dimensional formula for Planck\'s constant is:',
    options: [
      '[ML²T⁻¹]',
      '[ML²T⁻²]',
      '[MLT⁻¹]',
      '[ML²T⁻³]'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    subject: 'Chemistry',
    question: 'Which compound is formed when ethene reacts with hydrogen in the presence of a nickel catalyst?',
    options: [
      'Ethane',
      'Ethyne',
      'Methane',
      'Propane'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    subject: 'Mathematics',
    question: 'The number of solutions to the equation |x - 3| = 5 is:',
    options: [
      '0',
      '1',
      '2',
      'Infinite'
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    subject: 'Physics',
    question: 'A projectile is launched at an angle of 45° with initial velocity u. What is the maximum height reached?',
    options: [
      'u²/2g',
      'u²/4g',
      'u²/g',
      'u²/8g'
    ],
    correctAnswer: 1
  }
];
