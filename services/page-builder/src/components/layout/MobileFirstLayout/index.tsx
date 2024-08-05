type Props = {
  children: React.ReactNode;
};

export const MobileFirstLayout = ({ children }: Props) => {
  return (
    <div className="w-screen min-h-screen h-full flex justify-center bg-color-white dark:bg-color-black text-color-black dark:text-color-white">
      <div className="w-full max-w-xl ">{children}</div>
    </div>
  );
};
