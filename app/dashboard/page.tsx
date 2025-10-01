'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CircleCheck as CheckCircle2, Circle as XCircle, Chrome as Home } from 'lucide-react';
import { questions, Question } from '@/lib/questions';

export default function Dashboard() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<Record<number, boolean>>({});

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));

    setShowResults(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const isCorrect = (questionId: number) => {
    const question = questions.find(q => q.id === questionId);
    return question && selectedAnswers[questionId] === question.correctAnswer;
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'Physics':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Chemistry':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Mathematics':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
      default:
        return 'bg-slate-100 text-slate-800 hover:bg-slate-200';
    }
  };

  const answeredQuestions = Object.keys(selectedAnswers).length;
  const correctAnswers = Object.keys(selectedAnswers).filter(id =>
    isCorrect(parseInt(id))
  ).length;

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <BookOpen className="h-8 w-8 text-slate-900" />
              <span className="text-xl font-bold text-slate-900">JEE Practice</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Practice Dashboard</h1>
          <p className="text-slate-600">Answer the questions below and get instant feedback</p>
        </div>

        {answeredQuestions > 0 && (
          <Card className="mb-8 border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6">
                <div>
                  <p className="text-2xl font-bold text-slate-900">{answeredQuestions}/{questions.length}</p>
                  <p className="text-sm text-slate-600">Questions Attempted</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{correctAnswers}</p>
                  <p className="text-sm text-slate-600">Correct Answers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-600">{answeredQuestions - correctAnswers}</p>
                  <p className="text-sm text-slate-600">Incorrect Answers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          {questions.map((question, index) => (
            <Card
              key={question.id}
              className={`border-slate-200 transition-all ${
                showResults[question.id]
                  ? isCorrect(question.id)
                    ? 'border-green-300 bg-green-50/30'
                    : 'border-red-300 bg-red-50/30'
                  : 'bg-white hover:shadow-md'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getSubjectColor(question.subject)}>
                        {question.subject}
                      </Badge>
                      <span className="text-sm font-medium text-slate-500">Question {index + 1}</span>
                      {showResults[question.id] && (
                        <div className="ml-auto">
                          {isCorrect(question.id) ? (
                            <CheckCircle2 className="h-6 w-6 text-green-600" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-600" />
                          )}
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {question.question}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selectedAnswers[question.id] === optionIndex;
                    const isCorrectOption = optionIndex === question.correctAnswer;
                    const showFeedback = showResults[question.id];

                    let buttonClass = 'w-full justify-start text-left h-auto py-3 px-4 font-normal';

                    if (showFeedback) {
                      if (isCorrectOption) {
                        buttonClass += ' bg-green-100 hover:bg-green-100 text-green-900 border-green-300';
                      } else if (isSelected && !isCorrectOption) {
                        buttonClass += ' bg-red-100 hover:bg-red-100 text-red-900 border-red-300';
                      } else {
                        buttonClass += ' opacity-50';
                      }
                    } else if (isSelected) {
                      buttonClass += ' bg-slate-100 border-slate-300';
                    }

                    return (
                      <Button
                        key={optionIndex}
                        variant={isSelected && !showFeedback ? 'secondary' : 'outline'}
                        className={buttonClass}
                        onClick={() => handleAnswerSelect(question.id, optionIndex)}
                        disabled={showResults[question.id]}
                      >
                        <span className="font-semibold mr-3 text-slate-600">
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>
                        {option}
                        {showFeedback && isCorrectOption && (
                          <CheckCircle2 className="h-5 w-5 ml-auto text-green-600" />
                        )}
                        {showFeedback && isSelected && !isCorrectOption && (
                          <XCircle className="h-5 w-5 ml-auto text-red-600" />
                        )}
                      </Button>
                    );
                  })}
                </div>

                {showResults[question.id] && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    isCorrect(question.id)
                      ? 'bg-green-100 border border-green-300'
                      : 'bg-red-100 border border-red-300'
                  }`}>
                    <p className={`font-semibold ${
                      isCorrect(question.id) ? 'text-green-900' : 'text-red-900'
                    }`}>
                      {isCorrect(question.id)
                        ? 'Correct! Well done.'
                        : `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`
                      }
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {answeredQuestions === questions.length && (
          <Card className="mt-8 border-slate-900 bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Practice Complete!</CardTitle>
              <CardDescription className="text-slate-300">
                You&apos;ve answered all questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4">
                  <p className="text-4xl font-bold mb-2">
                    {Math.round((correctAnswers / questions.length) * 100)}%
                  </p>
                  <p className="text-slate-300">Accuracy</p>
                </div>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    setSelectedAnswers({});
                    setShowResults({});
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
