export default function Loading() {
  return (
    <div className="">
      <CutoutTextLoader
        height="575px"
        background="white"
        // NOTE: Using GIFs for the background looks super cool :)
        imgUrl="https://images.unsplash.com/photo-1588432273887-7968301a3d2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

type CutoutTextLoaderProps = {
  height: string;
  background: string;
  imgUrl: string;
};

const CutoutTextLoader = ({
  height,
  background,
  imgUrl,
}: CutoutTextLoaderProps) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 z-10 animate-pulse"
      />
      <span
        className="pointer-events-none absolute inset-0 z-20 bg-clip-text text-center font-black text-transparent"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Loading...
      </span>
    </div>
  );
};
