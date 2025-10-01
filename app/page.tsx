import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Target, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-slate-900" />
              <span className="text-xl font-bold text-slate-900">JEE Practice</span>
            </div>
            <Link href="/dashboard">
              <Button variant="outline">Start Practicing</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-100 rounded-full px-4 py-2 mb-8">
              <Zap className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-slate-700">Practice with instant feedback</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Master Your<br />
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                JEE Preparation
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Practice with curated questions from Physics, Chemistry, and Mathematics.
              Get immediate feedback and track your progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto text-base px-8">
                  Start Practice Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                View Questions
              </Button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="bg-slate-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Focused Practice</h3>
              <p className="text-slate-600 leading-relaxed">
                Carefully selected questions covering all major topics in Physics, Chemistry, and Mathematics.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="bg-slate-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Instant Feedback</h3>
              <p className="text-slate-600 leading-relaxed">
                Know immediately if your answer is correct or incorrect. Learn as you practice.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="bg-slate-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Track Progress</h3>
              <p className="text-slate-600 leading-relaxed">
                Monitor your performance across different subjects and identify areas for improvement.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-20 mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to ace your JEE exam?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Start practicing now and build confidence with every question.
            </p>
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="text-base px-8">
                Begin Your Practice
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
          <p>&copy; 2025 JEE Practice. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
