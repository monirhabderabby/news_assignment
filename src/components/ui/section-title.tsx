const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-start gap-x-4 ">
      <div className="bg-orange-600 text-[14px] text-white px-2 py-1">
        {title}
      </div>
      <div className="h-[2px] w-full bg-orange-600"></div>
    </div>
  );
};

export default SectionTitle;
