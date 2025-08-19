import Title from "../atoms/titlePart";
import TeamMemberCard from "../molecules/teamMemberCard";

import userImg from '../../assets/media/img-team/user-icon.png'; // Placeholder image, replace with actual images

export default function TeamSection() {
  return (
    <section className="w-full px-6 py-12 bg-black">
      <div className="flex justify-center mb-28">
        <Title text="L'équipe" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12" >
        <TeamMemberCard
          image={userImg}
          name=".Daariuuss"
          role="Fondateur"
        />
        <TeamMemberCard
          image={userImg}
          name="John Doe"
          role="Fondateur & Développeur"
        />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">

          <TeamMemberCard
            image={userImg}
            name="Jane Smith"
            role="Responsable Communication"
          />
          <TeamMemberCard
            image={userImg}
            name="Alex Martin"
            role="Modérateur"
          />
        </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">

            <TeamMemberCard
              image={userImg}
              name="Tidragon_"
              role="Lead Développeur Web"
            />
          
      </div>
    </section>
  );
}
