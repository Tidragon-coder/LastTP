import Title from "../atoms/titlePart";
import TeamMemberCard from "../molecules/teamMemberCard";
import userImg from "../../assets/media/img-team/user-icon.png";

export default function TeamSection() {
  return (
    <section className="w-full px-6 py-12">
      <div className="flex justify-center mb-16">
        <Title text="L'équipe" />
      </div>

      {/* Fondateurs */}
      <div className="flex justify-center gap-12 relative mb-20">
        <TeamMemberCard image={userImg} name=".Daariuuss" role="Fondateur" />
        <TeamMemberCard image={userImg} name="John Doe" role="Fondateur & Développeur" />
        <TeamMemberCard image={userImg} name="Jane Smith" role="Fondateur" />

        {/* Ligne reliant fondateurs aux développeurs */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
          <div className="w-1/2 h-0.5 bg-gray-600"></div>
        </div>
      </div>

      {/* Branche vers développeurs */}
      <div className="flex justify-center relative mb-12">
        <div className="absolute top-0 h-12 w-0.5 bg-gray-600"></div>
      </div>

      {/* Développeurs */}
      <div className="flex justify-center gap-16 relative mb-20">
        <TeamMemberCard image={userImg} name="Alex Martin" role="Développeur Front-End" />
        <TeamMemberCard image={userImg} name="Tidragon_" role="Lead Développeur Web" />

        {/* Ligne reliant devs au gérant */}
        {/* <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
          <div className="w-1/4 h-0.5 bg-gray-600"></div>
        </div> */}
      </div>

      {/* Branche vers gérant */}
      {/* <div className="flex justify-center relative mb-12">
        <div className="absolute top-0 h-8 w-0.5 bg-gray-600"></div>
      </div> */}

      {/* Gérant */}
      {/* <div className="flex justify-center">
        <TeamMemberCard image={userImg} name="Sarah Connor" role="Gérante" />
      </div> */}
    </section>
  );
}
