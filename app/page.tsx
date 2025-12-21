"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Welcome to Your App</h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        This is a demo page showcasing the improved navbar with theme toggle functionality.
                        Try clicking the theme toggle button in the navbar to switch between light and dark modes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 border rounded-lg bg-card">
                            <h2 className="text-xl font-semibold mb-3">Feature 1</h2>
                            <p className="text-muted-foreground">
                                This card demonstrates how the theme affects different UI elements.
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-card">
                            <h2 className="text-xl font-semibold mb-3">Feature 2</h2>
                            <p className="text-muted-foreground">
                                The navbar is now responsive and includes proper navigation links.
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-card">
                            <h2 className="text-xl font-semibold mb-3">Feature 3</h2>
                            <p className="text-muted-foreground">
                                Theme switching works seamlessly with next-themes integration.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}