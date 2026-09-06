import svgPaths from "./svg-462chrfor3";

export default function Button() {
  return (
    <div className="border border-[#e9eaeb] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[8px] size-full" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.49992" preserveAspectRatio="none" viewBox="0 0 8.99992 6.49992" width="8.99992">
            <path d={svgPaths.p2a7e2100} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Approve
      </p>
    </div>
  );
}