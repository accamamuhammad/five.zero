import RangeInput from "@/Components/Inputs/RangeInput";

const page = () => {
  return (
    <>
      <RangeInput handlePassRangeData={(data) => console.log(data)} />
    </>
  );
};

export default page;
