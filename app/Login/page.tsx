import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingLines from "@/components/floating-lines-background"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="grid min-h-[calc(100vh-64px)] lg:grid-cols-2">
        <div className="bg-slate-900 text-white relative hidden lg:flex lg:flex-col lg:justify-center lg:items-start p-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <FloatingLines
              enabledWaves={['top', 'middle', 'bottom']}
              lineCount={[4]}
              lineDistance={[100]}
              bendRadius={6.5}
              bendStrength={1}
              interactive={true}
              parallax={true}
              mixBlendMode="screen"
            />
          </div>
          <div className="max-w-lg relative z-20">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Welcome<br />
              Back.
            </h1>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              Sign in to continue managing your bills with India's most trusted payment platform.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300">Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300">Instant UPI Payments</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-6 md:p-10">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
