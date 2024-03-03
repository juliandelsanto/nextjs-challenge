import CustomLinkProps from "@/types/CustomLink";
const CustomLink = ({
  href,
  textSize = "text-2xl",
  title = "Login",
}: CustomLinkProps) => {
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors "
    >
      <h2 className={`mb-3 ${textSize} font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
    </a>
  );
};

export default CustomLink;
