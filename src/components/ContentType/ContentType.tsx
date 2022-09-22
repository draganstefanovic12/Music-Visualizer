import Button from "../Button";

type ContentTypeProps = {
  contentType: string;
  setContentType: React.Dispatch<React.SetStateAction<string>>;
};

const CONTENT = [{ name: "artists" }, { name: "tracks" }];

const ContentType = ({ contentType, setContentType }: ContentTypeProps) => {
  const handleClick = (type: string) => {
    setContentType(type);
  };

  return (
    <div className="selection-wrapper">
      {CONTENT.map((content, i) => (
        <Button
          className={contentType === content.name ? "selected" : ""}
          onClick={() => handleClick(content.name)}
          key={i}
        >
          {content.name}
        </Button>
      ))}
    </div>
  );
};

export default ContentType;
