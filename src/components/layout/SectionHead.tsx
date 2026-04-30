interface SectionHeadProps {
  index: string;
  title: string;
  subtitle: string;
  meta: string;
}

export default function SectionHead({ index, title, subtitle, meta }: SectionHeadProps) {
  return (
    <div className="section-head reveal">
      <h2>
        <span className="hash">{index} //</span>
        {title}
        <span className="sub"> — {subtitle}</span>
      </h2>
      <div className="meta">{meta}</div>
    </div>
  );
}
