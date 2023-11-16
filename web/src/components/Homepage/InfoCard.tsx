interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}

function InfoCard({ icon, title, info }: InfoCardProps) {
  return (
    <div className="bg-slate-200 flex flex-col items-center p-4">
      <span className="text-4xl my-4">{icon}</span>
      <h1 className="font-bold text-xl">{title}</h1>
      <span className="text-center">{info}</span>
    </div>
  );
}

export default InfoCard;
