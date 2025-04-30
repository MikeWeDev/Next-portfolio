
interface Experience {
  title: string;
  role: string;
  description: string;
  period: string;
  color: 'purple' | 'cyan' | 'green' | 'red' | 'blue'; // extend as needed
}

const experiences: Experience[] = [
  {
    title: 'Frontend Developer',
    role: '2023 – Present',
    description:
      'Development of enterprise web applications. Working at DemocracyLab.',
    period: '2023 – Present',
    color: 'purple',
  },
  {
    title: 'Backend Developer',
    role: '2024 – Present',
    description: 'Built and maintained various web applications.',
    period: '2024 – Present',
    color: 'cyan',
  },
  {
    title: 'Bachelor of Computer Science',
    role: 'Addis Ababa University',
    description: '',
    period: '2022 – 2026',
    color: 'purple',
  },
  {
    title: '12 Month Software Engineering Program',
    role: 'ALX Africa',
    description:
      'Intensive training in software engineering, specialization in back-end.',
    period: '2023 – 2024',
    color: 'cyan',
  },
  {
    title: 'Data Structure and Algorithm',
    role: 'Africa To Silicon Valley (A2SV)',
    description: '',
    period: '2025 – Present',
    color: 'green',
  },
];

export default function Expriance() {
  return (
    <section className="relative px-4 py-8 md:px-8 lg:px-16">
      {/* Vertical Line */}
      <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gray-700"></div>

      <h2 className="text-3xl font-bold mb-8 text-white">Experience & Education</h2>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex items-start">
            {/* Colored Dot */}
            <div
              className={`
                flex-shrink-0
                mt-1
                h-4 w-4
                rounded-full
                border-2 border-${exp.color}-500
                bg-${exp.color}-500
              `}
            ></div>

            {/* Content Card */}
            <div className="ml-6 pt-0.5 pb-4 pl-4 pr-6 bg-gray-800 rounded-xl shadow-md w-full">
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
              {exp.role && (
                <p className="text-base text-gray-200 mb-1">{exp.role}</p>
              )}
              {exp.description && (
                <p className="text-sm text-gray-400">{exp.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
