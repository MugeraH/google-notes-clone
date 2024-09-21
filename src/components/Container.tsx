type Props = { children: React.ReactNode };

function Container({ children }: Props) {
  return (
    <div className={"max-w-[90%] mx-auto px-2 md:max-w-[75rem]  md:px-8"}>
      {children}
    </div>
  );
}

export default Container;
