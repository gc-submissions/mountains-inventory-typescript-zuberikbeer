import Mountain from "./models/Mountain";

export const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 1931 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallesMountain = (arrayOfMtns: Mountain[]): string => {
  let tallestMountain: Mountain = arrayOfMtns[0];
  arrayOfMtns.forEach((mtn) => {
    if (mtn.height > tallestMountain.height) {
      tallestMountain = mtn;
    }
  });
  if (arrayOfMtns) {
    return tallestMountain.name;
  } else {
    return "";
  }
};
