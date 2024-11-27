import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";

export default function ApplyForAJobPage() {
  return (
    <div>
        <NavBar/>

        <div className="min-h-screen flex justify-center items-center h-screen bg-gradient-to-b from-white to-gray-300" >
            {/* Job opening */}
            <div className="container mx-auto px-4 py-8 shadow-md ">
                <h1 className="text-2xl font-semibold">Job Title</h1>
                <p className="text-gray-500">Job Description</p>
            </div>
        </div>

        <Footer />
    </div>
  );
}