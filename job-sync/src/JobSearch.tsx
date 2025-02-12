import { useState } from "react";
import axios from "axios";

const JOOBLE_API_KEY = "3fbdb4b9-b008-4b5b-99d4-f7ca5c72775d"; // Replace with your actual API key

// Define Job type
type Job = {
    title: string;
    company: string;
    location: string;
    link: string;
};

export default function JobSearch() {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`https://jooble.org/api/${JOOBLE_API_KEY}`, {
                keywords: query,
                location: location,
                page: 1,
            });

            setJobs(response.data.jobs || []);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setJobs([]);
        }
        setLoading(false);
    };

    return (
        <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
            <h2>Job Search</h2>
            <input 
                type="text" 
                placeholder="Job Title (e.g. Software Engineer)" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                style={{ padding: "10px", width: "80%", marginBottom: "10px" }}
            />
            <input 
                type="text" 
                placeholder="Location (Optional)" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                style={{ padding: "10px", width: "80%", marginBottom: "10px" }}
            />
            <button 
                onClick={fetchJobs} 
                style={{ padding: "10px 20px", cursor: "pointer" }}
                disabled={loading}
            >
                {loading ? "Searching..." : "Search Jobs"}
            </button>

            <div style={{ marginTop: "20px", textAlign: "left" }}>
                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <div key={index} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                            <h3>{job.title}</h3>
                            <p>{job.company}, {job.location}</p>
                            <a href={job.link} target="_blank" rel="noopener noreferrer">View Job</a>
                        </div>
                    ))
                ) : (
                    !loading && <p>No jobs found.</p>
                )}
            </div>
        </div>
    );
}
