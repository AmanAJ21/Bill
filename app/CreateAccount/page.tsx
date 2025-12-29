import Header from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingLines from "@/components/floating-lines-background"
import { RegisterForm } from "@/components/create-account-form"

export default function CreateAccountPage() {
    return (
        <div className="min-h-svh">
            <Header />
            <div className="grid min-h-[calc(100svh-64px)] lg:grid-cols-2">
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
                            Join the<br />
                            Revolution.
                        </h1>
                        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                            Start managing all your bills in one place. Experience the future of digital payments in India.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Free Account Setup</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Secure & Encrypted</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">24/7 Customer Support</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-6 md:p-10">
                    <RegisterForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}