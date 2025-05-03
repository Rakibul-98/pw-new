import { useNavigate, useParams } from "react-router-dom";
import { achievements } from "../../data/achievementData";

export default function AchievementDetails() {
    const { id } = useParams();
    const achievement = achievements.find((a) => a.id == id);
    const navigate = useNavigate();

    return (
        <section className="max-w-4xl mx-auto p-6 md:p-10">
            <button
                onClick={() => navigate(-1)}
                className="mb-5 text-blue-400 hover:text-blue-300 font-medium"
            >
                <span className="mr-2">←</span> Go back
            </button>
            <img
                src={achievement.imgSrc}
                alt={achievement.imgAlt}
                className="h-72 md:h-96 w-full rounded-lg mb-6"
            />
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-3xl font-bold">{achievement.title}</h2>
                <div className="flex flex-wrap gap-4">
                    {achievement.verificationLink && (
                        <a
                            href={achievement.verificationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
                        >
                            Verify Certificate
                        </a>
                    )}
                    {achievement.pdf && (
                        <a
                            href={achievement.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                        >
                            View PDF
                        </a>
                    )}
                </div>
            </div>
            <div className="flex justify-between items-center mb-3">
                <p className="">
                    <span className="font-semibold text-xl">Issued by:</span> {achievement.company}
                </p>
                <p className="">
                    <span className="font-semibold">Year:</span> {achievement.year} •{" "}
                    <span className="font-semibold">Duration:</span> {achievement.duration}
                </p>
            </div>
            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-2">Role : <span className="font-normal text-lg">{achievement.role}</span></h3>
            </div>
            <p className="mb-6 leading-relaxed">{achievement.description}</p>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {achievement.technologies?.map((tech, index) => (
                        <span key={index} className=" border px-3 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {achievement.contributions && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 ">Contributions</h3>
                    <ul className="list-disc list-inside">
                        {achievement.contributions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {achievement.skillsTested && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 ">Skills Tested</h3>
                    <ul className="list-disc list-inside ">
                        {achievement.skillsTested.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {achievement.learningOutcomes && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 ">Learning Outcomes</h3>
                    <ul className="list-disc list-inside ">
                        {achievement.learningOutcomes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}
