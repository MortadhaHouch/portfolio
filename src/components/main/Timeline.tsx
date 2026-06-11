import { Timeline as TimelineComponent } from "@/components/ui/timeline";
import Energy from "../animations/Energy";
import Software from "../animations/Software";
import Science from "../animations/Science";
export function Timeline() {
  const data = [
    {
      title: "A Foundation in Science",
      description: "My academic journey began with a Bachelor’s degree in the Science of Life, where I gained a strong foundation in critical thinking and problem-solving. This experience nurtured my curiosity for exploring new fields and tackling complex challenges with precision and adaptability.",
      badge: "2016 - 2019",
      component:<Science />,
    },
    {
      title: "Transition to Engineering and Sustainability",
      description: "Driven by a desire to contribute to a sustainable future, I pursued studies in Thermal Engineering and Renewable Energies. During this phase, I developed a strong technical foundation, focusing on energy efficiency and innovative solutions. This period not only sharpened my analytical skills but also inspired me to explore broader technological applications.",
      badge: "2019 - 2022",
      component:<Energy />,
    },
    {
      title: "Exploring the World of IT",
      description: "My passion for technology led me to embark on a self-driven path into the IT field, with a focus on web and mobile development. Over time, I’ve honed my expertise in modern frameworks like React, Next.js, and Angular, as well as back-end technologies like Fastify and PostgreSQL. I’ve also mastered tools like Tailwind CSS and Bootstrap for seamless design and user-friendly interfaces. My journey in IT has been about fusing creativity with functionality to deliver impactful digital solutions.",
      badge: "2022 - present",
      component:<Software />,
    },
  ];
  return (
      <TimelineComponent className="w-full max-w-4xl" data={data} />
  );
}