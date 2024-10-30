export const register = (req: any, res: any) => {
  try {
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ message: "Something went wrong!" });
  }
};
