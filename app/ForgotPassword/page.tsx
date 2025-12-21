import Header from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingLines from "@/components/floating-lines-background"
import { ForgotPasswordForm } from "@/components/forgot-password-form"

export default function ForgotPasswordPage() {
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
                            Reset Your<br />
                            Password.
                        </h1>
                        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                            Don't worry, it happens to the best of us. We'll help you get back to managing your bills securely.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Instant Email Delivery</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Secure Reset Process</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Link Valid for 24 Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-6 md:p-10">
                    <ForgotPasswordForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}