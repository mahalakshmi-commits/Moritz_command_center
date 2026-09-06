import svgPaths from "./svg-jbqly3413v";
type ButtonNovaProps = {
  className?: string;
  leftIcon?: React.ReactNode | null;
  rightIcon?: React.ReactNode | null;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  showSpinner?: boolean;
  size?: "Default" | "Small" | "Large" | "Extra small";
  state?: "Default" | "Hover & Active" | "Focus" | "Disabled" | "Invalid";
  variant?: "Primary" | "Secondary" | "Outline" | "Ghost" | "Destructive" | "Link";
};

function ButtonNova({ className, leftIcon = null, rightIcon = null, showLeftIcon = false, showRightIcon = false, showSpinner = false, size = "Default", state = "Default", variant = "Primary" }: ButtonNovaProps) {
  if (size === "Default" && variant === "Primary" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[#171717] opacity-90 relative rounded-[10px]"} data-name="Size=Default, Variant=Primary, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Primary" && state === "Focus") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]"} data-name="Size=Default, Variant=Primary, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Primary" && state === "Invalid") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[10px]"} data-name="Size=Default, Variant=Primary, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Primary" && state === "Disabled") {
    return (
      <div className={className || "bg-[#171717] opacity-50 relative rounded-[10px]"} data-name="Size=Default, Variant=Primary, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Secondary" && state === "Default") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[10px]"} data-name="Size=Default, Variant=Secondary, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Secondary" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[#f5f5f5] opacity-80 relative rounded-[10px]"} data-name="Size=Default, Variant=Secondary, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Secondary" && state === "Focus") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]"} data-name="Size=Default, Variant=Secondary, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Secondary" && state === "Invalid") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[10px]"} data-name="Size=Default, Variant=Secondary, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Secondary" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f5f5f5] opacity-50 relative rounded-[10px]"} data-name="Size=Default, Variant=Secondary, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Outline" && state === "Default") {
    return (
      <div className={className || "bg-white relative rounded-[10px]"} data-name="Size=Default, Variant=Outline, State=Default">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Outline" && state === "Hover & Active") {
    return (
      <div className={className || "relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)" }} data-name="Size=Default, Variant=Outline, State=Hover & Active">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Outline" && state === "Focus") {
    return (
      <div className={className || "bg-white relative rounded-[10px]"} data-name="Size=Default, Variant=Outline, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#b7b7b7] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Outline" && state === "Invalid") {
    return (
      <div className={className || "bg-white relative rounded-[10px]"} data-name="Size=Default, Variant=Outline, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Outline" && state === "Disabled") {
    return (
      <div className={className || "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[10px]"} data-name="Size=Default, Variant=Outline, State=Disabled">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Ghost" && state === "Default") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Default, Variant=Ghost, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Link" && state === "Default") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Default, Variant=Link, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Ghost" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[rgba(0,0,0,0.05)] relative rounded-[10px]"} data-name="Size=Default, Variant=Ghost, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Link" && state === "Hover & Active") {
    return (
      <div className={className || "relative rounded-[10px]"} data-name="Size=Default, Variant=Link, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Ghost" && state === "Focus") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Default, Variant=Ghost, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Ghost" && state === "Invalid") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Default, Variant=Ghost, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Link" && state === "Focus") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Default, Variant=Link, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Link" && state === "Invalid") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Default, Variant=Link, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Ghost" && state === "Disabled") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] opacity-50 relative rounded-[10px]"} data-name="Size=Default, Variant=Ghost, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Link" && state === "Disabled") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] opacity-50 relative rounded-[10px]"} data-name="Size=Default, Variant=Link, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Destructive" && state === "Default") {
    return (
      <div className={className || "relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Default, Variant=Destructive, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Destructive" && state === "Hover & Active") {
    return (
      <div className={className || "opacity-90 relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Default, Variant=Destructive, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && variant === "Destructive" && state === "Focus") {
    return (
      <div className={className || "relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Default, Variant=Destructive, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#ee9393] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Destructive" && state === "Invalid") {
    return (
      <div className={className || "relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Default, Variant=Destructive, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Default" && variant === "Destructive" && state === "Disabled") {
    return (
      <div className={className || "opacity-50 relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Default, Variant=Destructive, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Primary" && state === "Default") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[10px]"} data-name="Size=Large, Variant=Primary, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Primary" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[#171717] opacity-90 relative rounded-[10px]"} data-name="Size=Large, Variant=Primary, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Primary" && state === "Focus") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]"} data-name="Size=Large, Variant=Primary, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Primary" && state === "Invalid") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[10px]"} data-name="Size=Large, Variant=Primary, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Primary" && state === "Disabled") {
    return (
      <div className={className || "bg-[#171717] opacity-50 relative rounded-[10px]"} data-name="Size=Large, Variant=Primary, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Secondary" && state === "Default") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[10px]"} data-name="Size=Large, Variant=Secondary, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Secondary" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[#f5f5f5] opacity-80 relative rounded-[10px]"} data-name="Size=Large, Variant=Secondary, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Secondary" && state === "Focus") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]"} data-name="Size=Large, Variant=Secondary, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Secondary" && state === "Invalid") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[10px]"} data-name="Size=Large, Variant=Secondary, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Secondary" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f5f5f5] opacity-50 relative rounded-[10px]"} data-name="Size=Large, Variant=Secondary, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Outline" && state === "Default") {
    return (
      <div className={className || "bg-white relative rounded-[10px]"} data-name="Size=Large, Variant=Outline, State=Default">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Outline" && state === "Hover & Active") {
    return (
      <div className={className || "relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)" }} data-name="Size=Large, Variant=Outline, State=Hover & Active">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Outline" && state === "Focus") {
    return (
      <div className={className || "bg-white relative rounded-[10px]"} data-name="Size=Large, Variant=Outline, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#b7b7b7] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Outline" && state === "Invalid") {
    return (
      <div className={className || "bg-white relative rounded-[10px]"} data-name="Size=Large, Variant=Outline, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Outline" && state === "Disabled") {
    return (
      <div className={className || "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[10px]"} data-name="Size=Large, Variant=Outline, State=Disabled">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Ghost" && state === "Default") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Large, Variant=Ghost, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Link" && state === "Default") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Large, Variant=Link, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Ghost" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[rgba(0,0,0,0.05)] relative rounded-[10px]"} data-name="Size=Large, Variant=Ghost, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Link" && state === "Hover & Active") {
    return (
      <div className={className || "relative rounded-[10px]"} data-name="Size=Large, Variant=Link, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Ghost" && state === "Focus") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Large, Variant=Ghost, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Ghost" && state === "Invalid") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Large, Variant=Ghost, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Link" && state === "Focus") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Large, Variant=Link, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Link" && state === "Invalid") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"} data-name="Size=Large, Variant=Link, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Ghost" && state === "Disabled") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] opacity-50 relative rounded-[10px]"} data-name="Size=Large, Variant=Ghost, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Link" && state === "Disabled") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] opacity-50 relative rounded-[10px]"} data-name="Size=Large, Variant=Link, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Destructive" && state === "Default") {
    return (
      <div className={className || "relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Large, Variant=Destructive, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Destructive" && state === "Hover & Active") {
    return (
      <div className={className || "opacity-90 relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Large, Variant=Destructive, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Large" && variant === "Destructive" && state === "Focus") {
    return (
      <div className={className || "relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Large, Variant=Destructive, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#ee9393] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Destructive" && state === "Invalid") {
    return (
      <div className={className || "relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Large, Variant=Destructive, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Large" && variant === "Destructive" && state === "Disabled") {
    return (
      <div className={className || "opacity-50 relative rounded-[10px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Large, Variant=Destructive, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[8px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Primary" && state === "Default") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[8px]"} data-name="Size=Small, Variant=Primary, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Primary" && state === "Default") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[8px]"} data-name="Size=Extra small, Variant=Primary, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Primary" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[#171717] opacity-90 relative rounded-[8px]"} data-name="Size=Small, Variant=Primary, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Primary" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[#171717] opacity-90 relative rounded-[8px]"} data-name="Size=Extra small, Variant=Primary, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Primary" && state === "Focus") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]"} data-name="Size=Small, Variant=Primary, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Primary" && state === "Invalid") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[8px]"} data-name="Size=Small, Variant=Primary, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Primary" && state === "Focus") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]"} data-name="Size=Extra small, Variant=Primary, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Primary" && state === "Invalid") {
    return (
      <div className={className || "bg-[#171717] relative rounded-[8px] shadow-[0px_0px_0px_2px_#fecaca]"} data-name="Size=Extra small, Variant=Primary, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Primary" && state === "Disabled") {
    return (
      <div className={className || "bg-[#171717] opacity-50 relative rounded-[8px]"} data-name="Size=Small, Variant=Primary, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="white" />
                        <path d={svgPaths.p127ab420} fill="white" />
                        <path d={svgPaths.p130c6ef0} fill="white" />
                        <path d={svgPaths.p296c0500} fill="white" />
                        <path d={svgPaths.p3de49b00} fill="white" />
                        <path d={svgPaths.p25b79180} fill="white" />
                        <path d={svgPaths.p27cdf080} fill="white" />
                        <path d={svgPaths.p52c3c80} fill="white" />
                        <path d={svgPaths.pd116b00} fill="white" />
                        <path d={svgPaths.p1a5a2600} fill="white" />
                        <path d={svgPaths.p195f0000} fill="white" />
                        <path d={svgPaths.p2f14a900} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Primary" && state === "Disabled") {
    return (
      <div className={className || "bg-[#171717] opacity-50 relative rounded-[8px]"} data-name="Size=Extra small, Variant=Primary, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="white" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="white" />
                        <path d={svgPaths.p994cd00} fill="white" />
                        <path d={svgPaths.p38493f0} fill="white" />
                        <path d={svgPaths.p3b5b2f70} fill="white" />
                        <path d={svgPaths.p3f6ca900} fill="white" />
                        <path d={svgPaths.p14b07a00} fill="white" />
                        <path d={svgPaths.p1556be80} fill="white" />
                        <path d={svgPaths.p2925b300} fill="white" />
                        <path d={svgPaths.p33cb4400} fill="white" />
                        <path d={svgPaths.p25c84100} fill="white" />
                        <path d={svgPaths.p177e00} fill="white" />
                        <path d={svgPaths.p2835680} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Secondary" && state === "Default") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[8px]"} data-name="Size=Small, Variant=Secondary, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Secondary" && state === "Default") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[8px]"} data-name="Size=Extra small, Variant=Secondary, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Secondary" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[#f5f5f5] opacity-80 relative rounded-[8px]"} data-name="Size=Small, Variant=Secondary, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Secondary" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[#f5f5f5] opacity-80 relative rounded-[8px]"} data-name="Size=Extra small, Variant=Secondary, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Secondary" && state === "Focus") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]"} data-name="Size=Small, Variant=Secondary, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Secondary" && state === "Invalid") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[8px]"} data-name="Size=Small, Variant=Secondary, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Secondary" && state === "Focus") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]"} data-name="Size=Extra small, Variant=Secondary, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Secondary" && state === "Invalid") {
    return (
      <div className={className || "bg-[#f5f5f5] relative rounded-[8px] shadow-[0px_0px_0px_2px_#fecaca]"} data-name="Size=Extra small, Variant=Secondary, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Secondary" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f5f5f5] opacity-50 relative rounded-[8px]"} data-name="Size=Small, Variant=Secondary, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Secondary" && state === "Disabled") {
    return (
      <div className={className || "bg-[#f5f5f5] opacity-50 relative rounded-[8px]"} data-name="Size=Extra small, Variant=Secondary, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#171717" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Outline" && state === "Default") {
    return (
      <div className={className || "bg-white relative rounded-[8px]"} data-name="Size=Small, Variant=Outline, State=Default">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Outline" && state === "Default") {
    return (
      <div className={className || "bg-white relative rounded-[8px]"} data-name="Size=Extra small, Variant=Outline, State=Default">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Outline" && state === "Hover & Active") {
    return (
      <div className={className || "relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)" }} data-name="Size=Small, Variant=Outline, State=Hover & Active">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Outline" && state === "Hover & Active") {
    return (
      <div className={className || "relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)" }} data-name="Size=Extra small, Variant=Outline, State=Hover & Active">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Outline" && state === "Focus") {
    return (
      <div className={className || "bg-white relative rounded-[8px]"} data-name="Size=Small, Variant=Outline, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#b7b7b7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Small" && variant === "Outline" && state === "Invalid") {
    return (
      <div className={className || "bg-white relative rounded-[8px]"} data-name="Size=Small, Variant=Outline, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Outline" && state === "Focus") {
    return (
      <div className={className || "bg-white relative rounded-[8px]"} data-name="Size=Extra small, Variant=Outline, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#b7b7b7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Outline" && state === "Invalid") {
    return (
      <div className={className || "bg-white relative rounded-[8px]"} data-name="Size=Extra small, Variant=Outline, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Small" && variant === "Outline" && state === "Disabled") {
    return (
      <div className={className || "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[8px]"} data-name="Size=Small, Variant=Outline, State=Disabled">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Outline" && state === "Disabled") {
    return (
      <div className={className || "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] opacity-50 relative rounded-[8px]"} data-name="Size=Extra small, Variant=Outline, State=Disabled">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Ghost" && state === "Default") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Small, Variant=Ghost, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Ghost" && state === "Default") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Extra small, Variant=Ghost, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Link" && state === "Default") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Small, Variant=Link, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Link" && state === "Default") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Extra small, Variant=Link, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Ghost" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[rgba(0,0,0,0.05)] relative rounded-[8px]"} data-name="Size=Small, Variant=Ghost, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Ghost" && state === "Hover & Active") {
    return (
      <div className={className || "bg-[rgba(0,0,0,0.05)] relative rounded-[8px]"} data-name="Size=Extra small, Variant=Ghost, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Link" && state === "Hover & Active") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=Small, Variant=Link, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Link" && state === "Hover & Active") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=Extra small, Variant=Link, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Ghost" && state === "Focus") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Small, Variant=Ghost, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Small" && variant === "Ghost" && state === "Invalid") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Small, Variant=Ghost, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Ghost" && state === "Focus") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Extra small, Variant=Ghost, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Ghost" && state === "Invalid") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Extra small, Variant=Ghost, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Small" && variant === "Link" && state === "Focus") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Small, Variant=Link, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Small" && variant === "Link" && state === "Invalid") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Small, Variant=Link, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Link" && state === "Focus") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Extra small, Variant=Link, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_#d4d4d4]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Link" && state === "Invalid") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[8px]"} data-name="Size=Extra small, Variant=Link, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Small" && variant === "Ghost" && state === "Disabled") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] opacity-50 relative rounded-[8px]"} data-name="Size=Small, Variant=Ghost, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Ghost" && state === "Disabled") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] opacity-50 relative rounded-[8px]"} data-name="Size=Extra small, Variant=Ghost, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Link" && state === "Disabled") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] opacity-50 relative rounded-[8px]"} data-name="Size=Small, Variant=Link, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="black" />
                        <path d={svgPaths.p127ab420} fill="black" />
                        <path d={svgPaths.p130c6ef0} fill="black" />
                        <path d={svgPaths.p296c0500} fill="black" />
                        <path d={svgPaths.p3de49b00} fill="black" />
                        <path d={svgPaths.p25b79180} fill="black" />
                        <path d={svgPaths.p27cdf080} fill="black" />
                        <path d={svgPaths.p52c3c80} fill="black" />
                        <path d={svgPaths.pd116b00} fill="black" />
                        <path d={svgPaths.p1a5a2600} fill="black" />
                        <path d={svgPaths.p195f0000} fill="black" />
                        <path d={svgPaths.p2f14a900} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Link" && state === "Disabled") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0)] opacity-50 relative rounded-[8px]"} data-name="Size=Extra small, Variant=Link, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="black" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="black" />
                        <path d={svgPaths.p994cd00} fill="black" />
                        <path d={svgPaths.p38493f0} fill="black" />
                        <path d={svgPaths.p3b5b2f70} fill="black" />
                        <path d={svgPaths.p3f6ca900} fill="black" />
                        <path d={svgPaths.p14b07a00} fill="black" />
                        <path d={svgPaths.p1556be80} fill="black" />
                        <path d={svgPaths.p2925b300} fill="black" />
                        <path d={svgPaths.p33cb4400} fill="black" />
                        <path d={svgPaths.p25c84100} fill="black" />
                        <path d={svgPaths.p177e00} fill="black" />
                        <path d={svgPaths.p2835680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Destructive" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Small, Variant=Destructive, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Destructive" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Extra small, Variant=Destructive, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Destructive" && state === "Hover & Active") {
    return (
      <div className={className || "opacity-90 relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Small, Variant=Destructive, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Destructive" && state === "Hover & Active") {
    return (
      <div className={className || "opacity-90 relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Extra small, Variant=Destructive, State=Hover & Active">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && variant === "Destructive" && state === "Focus") {
    return (
      <div className={className || "relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Small, Variant=Destructive, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#ee9393] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Small" && variant === "Destructive" && state === "Invalid") {
    return (
      <div className={className || "relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Small, Variant=Destructive, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Destructive" && state === "Focus") {
    return (
      <div className={className || "relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Extra small, Variant=Destructive, State=Focus">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#ee9393] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Extra small" && variant === "Destructive" && state === "Invalid") {
    return (
      <div className={className || "relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Extra small, Variant=Destructive, State=Invalid">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_0px_0px_2px_#fecaca]" />
      </div>
    );
  }
  if (size === "Small" && variant === "Destructive" && state === "Disabled") {
    return (
      <div className={className || "opacity-50 relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Small, Variant=Destructive, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[16px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                        <path d={svgPaths.p2a3b8300} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                      <g id="Vector">
                        <path d={svgPaths.peea0e70} fill="#DC2626" />
                        <path d={svgPaths.p127ab420} fill="#DC2626" />
                        <path d={svgPaths.p130c6ef0} fill="#DC2626" />
                        <path d={svgPaths.p296c0500} fill="#DC2626" />
                        <path d={svgPaths.p3de49b00} fill="#DC2626" />
                        <path d={svgPaths.p25b79180} fill="#DC2626" />
                        <path d={svgPaths.p27cdf080} fill="#DC2626" />
                        <path d={svgPaths.p52c3c80} fill="#DC2626" />
                        <path d={svgPaths.pd116b00} fill="#DC2626" />
                        <path d={svgPaths.p1a5a2600} fill="#DC2626" />
                        <path d={svgPaths.p195f0000} fill="#DC2626" />
                        <path d={svgPaths.p2f14a900} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  if (size === "Extra small" && variant === "Destructive" && state === "Disabled") {
    return (
      <div className={className || "opacity-50 relative rounded-[8px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Size=Extra small, Variant=Destructive, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
            {showSpinner && (
              <div className="relative shrink-0 size-[12px]" data-name="Spinner">
                <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                    <div className="relative size-full" data-name="Spinner">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.75" preserveAspectRatio="none" viewBox="0 0 9.75 9.75" width="9.75">
                        <path d={svgPaths.pbf2d480} fill="#DC2626" id="Spinner" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLeftIcon &&
              (leftIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Label</p>
            </div>
            {showRightIcon &&
              (rightIcon || (
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <g id="Vector">
                        <path d={svgPaths.p39ebe600} fill="#DC2626" />
                        <path d={svgPaths.p994cd00} fill="#DC2626" />
                        <path d={svgPaths.p38493f0} fill="#DC2626" />
                        <path d={svgPaths.p3b5b2f70} fill="#DC2626" />
                        <path d={svgPaths.p3f6ca900} fill="#DC2626" />
                        <path d={svgPaths.p14b07a00} fill="#DC2626" />
                        <path d={svgPaths.p1556be80} fill="#DC2626" />
                        <path d={svgPaths.p2925b300} fill="#DC2626" />
                        <path d={svgPaths.p33cb4400} fill="#DC2626" />
                        <path d={svgPaths.p25c84100} fill="#DC2626" />
                        <path d={svgPaths.p177e00} fill="#DC2626" />
                        <path d={svgPaths.p2835680} fill="#DC2626" />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "bg-[#171717] relative rounded-[10px]"} data-name="Size=Default, Variant=Primary, State=Default">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
          {showSpinner && (
            <div className="relative shrink-0 size-[16px]" data-name="Spinner">
              <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                  <div className="relative size-full" data-name="Spinner">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                      <path d={svgPaths.p2a3b8300} fill="white" id="Spinner" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showLeftIcon &&
            (leftIcon || (
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                    <g id="Vector">
                      <path d={svgPaths.peea0e70} fill="white" />
                      <path d={svgPaths.p127ab420} fill="white" />
                      <path d={svgPaths.p130c6ef0} fill="white" />
                      <path d={svgPaths.p296c0500} fill="white" />
                      <path d={svgPaths.p3de49b00} fill="white" />
                      <path d={svgPaths.p25b79180} fill="white" />
                      <path d={svgPaths.p27cdf080} fill="white" />
                      <path d={svgPaths.p52c3c80} fill="white" />
                      <path d={svgPaths.pd116b00} fill="white" />
                      <path d={svgPaths.p1a5a2600} fill="white" />
                      <path d={svgPaths.p195f0000} fill="white" />
                      <path d={svgPaths.p2f14a900} fill="white" />
                    </g>
                  </svg>
                </div>
              </div>
            ))}
          <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Label</p>
          </div>
          {showRightIcon &&
            (rightIcon || (
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                    <g id="Vector">
                      <path d={svgPaths.peea0e70} fill="white" />
                      <path d={svgPaths.p127ab420} fill="white" />
                      <path d={svgPaths.p130c6ef0} fill="white" />
                      <path d={svgPaths.p296c0500} fill="white" />
                      <path d={svgPaths.p3de49b00} fill="white" />
                      <path d={svgPaths.p25b79180} fill="white" />
                      <path d={svgPaths.p27cdf080} fill="white" />
                      <path d={svgPaths.p52c3c80} fill="white" />
                      <path d={svgPaths.pd116b00} fill="white" />
                      <path d={svgPaths.p1a5a2600} fill="white" />
                      <path d={svgPaths.p195f0000} fill="white" />
                      <path d={svgPaths.p2f14a900} fill="white" />
                    </g>
                  </svg>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#737373] text-[16px] w-full">Displays a button or a component that looks like a button.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[40px] text-black tracking-[-1.5px] w-full">Button - Nova</p>
      <Text1 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute h-[360px] left-0 top-[65px] w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[27px] text-[#9747ff] text-[11px] top-[173px] whitespace-nowrap">Variant: Primary</p>
      <div className="absolute h-[340px] left-[116px] top-[10px] w-[7px]" data-name="Bracket">
        <div className="absolute inset-[-0.15%_0_-0.15%_-7.14%]">
          <svg className="block size-full" fill="none" height="341" preserveAspectRatio="none" viewBox="0 0 7.5 341" width="7.5">
            <path d="M7.5 0.5H0.5V340.5H7.5" id="Bracket" stroke="#9747FF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute h-[360px] left-0 top-[465px] w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[12px] text-[#9747ff] text-[11px] top-[173px] whitespace-nowrap">Variant: Secondary</p>
      <div className="absolute h-[340px] left-[116px] top-[10px] w-[7px]" data-name="Bracket">
        <div className="absolute inset-[-0.15%_0_-0.15%_-7.14%]">
          <svg className="block size-full" fill="none" height="341" preserveAspectRatio="none" viewBox="0 0 7.5 341" width="7.5">
            <path d="M7.5 0.5H0.5V340.5H7.5" id="Bracket" stroke="#9747FF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute h-[360px] left-0 top-[865px] w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[29px] text-[#9747ff] text-[11px] top-[173px] whitespace-nowrap">Variant: Outline</p>
      <div className="absolute h-[340px] left-[116px] top-[10px] w-[7px]" data-name="Bracket">
        <div className="absolute inset-[-0.15%_0_-0.15%_-7.14%]">
          <svg className="block size-full" fill="none" height="341" preserveAspectRatio="none" viewBox="0 0 7.5 341" width="7.5">
            <path d="M7.5 0.5H0.5V340.5H7.5" id="Bracket" stroke="#9747FF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute h-[360px] left-0 top-[1265px] w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[45px] text-[#9747ff] text-[11px] top-[173px] whitespace-nowrap">Variant: Link</p>
      <div className="absolute h-[340px] left-[116px] top-[10px] w-[7px]" data-name="Bracket">
        <div className="absolute inset-[-0.15%_0_-0.15%_-7.14%]">
          <svg className="block size-full" fill="none" height="341" preserveAspectRatio="none" viewBox="0 0 7.5 341" width="7.5">
            <path d="M7.5 0.5H0.5V340.5H7.5" id="Bracket" stroke="#9747FF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute h-[360px] left-0 top-[1665px] w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[36px] text-[#9747ff] text-[11px] top-[173px] whitespace-nowrap">Variant: Ghost</p>
      <div className="absolute h-[340px] left-[116px] top-[10px] w-[7px]" data-name="Bracket">
        <div className="absolute inset-[-0.15%_0_-0.15%_-7.14%]">
          <svg className="block size-full" fill="none" height="341" preserveAspectRatio="none" viewBox="0 0 7.5 341" width="7.5">
            <path d="M7.5 0.5H0.5V340.5H7.5" id="Bracket" stroke="#9747FF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute h-[360px] left-0 top-[2065px] w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[8px] text-[#9747ff] text-[11px] top-[173px] whitespace-nowrap">Variant: Destructive</p>
      <div className="absolute h-[340px] left-[116px] top-[10px] w-[7px]" data-name="Bracket">
        <div className="absolute inset-[-0.15%_0_-0.15%_-7.14%]">
          <svg className="block size-full" fill="none" height="341" preserveAspectRatio="none" viewBox="0 0 7.5 341" width="7.5">
            <path d="M7.5 0.5H0.5V340.5H7.5" id="Bracket" stroke="#9747FF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[65px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[47px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Default</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[145px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[10px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">{`State: Hover & Active`}</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[225px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[54px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Focus</p>
    </div>
  );
}

function Label9() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[305px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[51px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Invalid</p>
    </div>
  );
}

function Label10() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[385px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Disabled</p>
    </div>
  );
}

function Label11() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[465px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[47px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Default</p>
    </div>
  );
}

function Label12() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[545px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[10px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">{`State: Hover & Active`}</p>
    </div>
  );
}

function Label13() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[625px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[54px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Focus</p>
    </div>
  );
}

function Label14() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[705px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[51px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Invalid</p>
    </div>
  );
}

function Label15() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[785px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Disabled</p>
    </div>
  );
}

function Label16() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[865px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[47px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Default</p>
    </div>
  );
}

function Label17() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[945px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[10px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">{`State: Hover & Active`}</p>
    </div>
  );
}

function Label18() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1025px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[54px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Focus</p>
    </div>
  );
}

function Label19() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1105px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[51px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Invalid</p>
    </div>
  );
}

function Label20() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1185px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Disabled</p>
    </div>
  );
}

function Label21() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1265px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[47px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Default</p>
    </div>
  );
}

function Label22() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1345px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[10px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">{`State: Hover & Active`}</p>
    </div>
  );
}

function Label23() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1425px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[54px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Focus</p>
    </div>
  );
}

function Label24() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1505px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[51px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Invalid</p>
    </div>
  );
}

function Label25() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1585px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Disabled</p>
    </div>
  );
}

function Label26() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1665px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[47px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Default</p>
    </div>
  );
}

function Label27() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1745px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[10px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">{`State: Hover & Active`}</p>
    </div>
  );
}

function Label28() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1825px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[54px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Focus</p>
    </div>
  );
}

function Label29() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1905px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[51px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Invalid</p>
    </div>
  );
}

function Label30() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[1985px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Disabled</p>
    </div>
  );
}

function Label31() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[2065px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[47px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Default</p>
    </div>
  );
}

function Label32() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[2145px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[10px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">{`State: Hover & Active`}</p>
    </div>
  );
}

function Label33() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[2225px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[54px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Focus</p>
    </div>
  );
}

function Label34() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[2305px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[51px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Invalid</p>
    </div>
  );
}

function Label35() {
  return (
    <div className="absolute h-[40px] left-[130px] top-[2385px] w-[123px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#9747ff] text-[11px] top-[13px] whitespace-nowrap">State: Disabled</p>
    </div>
  );
}

function Label36() {
  return (
    <div className="absolute h-[25px] left-[253px] top-0 w-[103.5px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[19.25px] text-[#9747ff] text-[11px] top-[5.5px] whitespace-nowrap">Size: Default</p>
    </div>
  );
}

function Label37() {
  return (
    <div className="absolute h-[25px] left-[356.5px] top-0 w-[103.5px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[23.75px] text-[#9747ff] text-[11px] top-[5.5px] whitespace-nowrap">Size: Small</p>
    </div>
  );
}

function Label38() {
  return (
    <div className="absolute h-[25px] left-[460px] top-0 w-[103.5px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[23.25px] text-[#9747ff] text-[11px] top-[5.5px] whitespace-nowrap">Size: Large</p>
    </div>
  );
}

function Label39() {
  return (
    <div className="absolute h-[25px] left-[563.5px] top-0 w-[103.5px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-[9.75px] text-[#9747ff] text-[11px] top-[5.5px] whitespace-nowrap">Size: Extra small</p>
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute h-[2440px] left-[253px] top-[25px] w-[414px]" data-name="Grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="2440" preserveAspectRatio="none" viewBox="0 0 414 2440" width="414">
        <g id="Grid">
          <line id="Line" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="99.5" y2="99.5" />
          <line id="Line_2" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="179.5" y2="179.5" />
          <line id="Line_3" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="259.5" y2="259.5" />
          <line id="Line_4" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="339.5" y2="339.5" />
          <line id="Line_5" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="419.5" y2="419.5" />
          <line id="Line_6" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="499.5" y2="499.5" />
          <line id="Line_7" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="579.5" y2="579.5" />
          <line id="Line_8" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="659.5" y2="659.5" />
          <line id="Line_9" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="739.5" y2="739.5" />
          <line id="Line_10" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="819.5" y2="819.5" />
          <line id="Line_11" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="899.5" y2="899.5" />
          <line id="Line_12" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="979.5" y2="979.5" />
          <line id="Line_13" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1059.5" y2="1059.5" />
          <line id="Line_14" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1139.5" y2="1139.5" />
          <line id="Line_15" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1219.5" y2="1219.5" />
          <line id="Line_16" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1299.5" y2="1299.5" />
          <line id="Line_17" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1379.5" y2="1379.5" />
          <line id="Line_18" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1459.5" y2="1459.5" />
          <line id="Line_19" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1539.5" y2="1539.5" />
          <line id="Line_20" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1619.5" y2="1619.5" />
          <line id="Line_21" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1699.5" y2="1699.5" />
          <line id="Line_22" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1779.5" y2="1779.5" />
          <line id="Line_23" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1859.5" y2="1859.5" />
          <line id="Line_24" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="1939.5" y2="1939.5" />
          <line id="Line_25" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="2019.5" y2="2019.5" />
          <line id="Line_26" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="2099.5" y2="2099.5" />
          <line id="Line_27" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="2179.5" y2="2179.5" />
          <line id="Line_28" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="2259.5" y2="2259.5" />
          <line id="Line_29" stroke="#9747FF" strokeDasharray="4 4" x2="414" y1="2339.5" y2="2339.5" />
          <line id="Line_30" stroke="#9747FF" strokeDasharray="4 4" x1="104" x2="104" y2="2440" />
          <line id="Line_31" stroke="#9747FF" strokeDasharray="4 4" x1="207.5" x2="207.5" y2="2440" />
          <line id="Line_32" stroke="#9747FF" strokeDasharray="4 4" x1="311" x2="311" y2="2440" />
        </g>
      </svg>
    </div>
  );
}

function BooleanVisibility() {
  return (
    <div className="h-[236px] relative shrink-0 w-[100px]" data-name="Boolean Visibility">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-0 text-[11px] text-[rgba(151,71,255,0.5)] top-0 whitespace-nowrap">Default, Outline, Default</p>
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#9747ff] text-[11px] top-[20px] whitespace-nowrap">Show right icon: On</p>
      <div className="absolute bg-[rgba(255,255,255,0.3)] left-0 rounded-[10px] top-[40px]" data-name="Button - Nova">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                  <g id="Vector">
                    <path d={svgPaths.peea0e70} fill="black" />
                    <path d={svgPaths.p127ab420} fill="black" />
                    <path d={svgPaths.p130c6ef0} fill="black" />
                    <path d={svgPaths.p296c0500} fill="black" />
                    <path d={svgPaths.p3de49b00} fill="black" />
                    <path d={svgPaths.p25b79180} fill="black" />
                    <path d={svgPaths.p27cdf080} fill="black" />
                    <path d={svgPaths.p52c3c80} fill="black" />
                    <path d={svgPaths.pd116b00} fill="black" />
                    <path d={svgPaths.p1a5a2600} fill="black" />
                    <path d={svgPaths.p195f0000} fill="black" />
                    <path d={svgPaths.p2f14a900} fill="black" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#9747ff] text-[11px] top-[100px] whitespace-nowrap">Show left icon: On</p>
      <div className="absolute bg-[rgba(255,255,255,0.3)] left-0 rounded-[10px] top-[120px]" data-name="Button - Nova">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                  <g id="Vector">
                    <path d={svgPaths.peea0e70} fill="black" />
                    <path d={svgPaths.p127ab420} fill="black" />
                    <path d={svgPaths.p130c6ef0} fill="black" />
                    <path d={svgPaths.p296c0500} fill="black" />
                    <path d={svgPaths.p3de49b00} fill="black" />
                    <path d={svgPaths.p25b79180} fill="black" />
                    <path d={svgPaths.p27cdf080} fill="black" />
                    <path d={svgPaths.p52c3c80} fill="black" />
                    <path d={svgPaths.pd116b00} fill="black" />
                    <path d={svgPaths.p1a5a2600} fill="black" />
                    <path d={svgPaths.p195f0000} fill="black" />
                    <path d={svgPaths.p2f14a900} fill="black" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#9747ff] text-[11px] top-[180px] whitespace-nowrap">Show spinner: On</p>
      <div className="absolute bg-[rgba(255,255,255,0.3)] left-0 rounded-[10px] top-[200px]" data-name="Button - Nova">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="Spinner">
              <div className="absolute flex inset-[6.25%_12.5%_12.5%_6.25%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                  <div className="relative size-full" data-name="Spinner">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
                      <path d={svgPaths.p2a3b8300} fill="black" id="Spinner" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">Label</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertyCombinations() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[253px] top-[2489px]" data-name="Property Combinations">
      <BooleanVisibility />
    </div>
  );
}

function Documentation() {
  return (
    <div className="absolute h-[2725px] left-0 top-0 w-[667px]" data-name="Documentation">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
      <Label5 />
      <Label6 />
      <Label7 />
      <Label8 />
      <Label9 />
      <Label10 />
      <Label11 />
      <Label12 />
      <Label13 />
      <Label14 />
      <Label15 />
      <Label16 />
      <Label17 />
      <Label18 />
      <Label19 />
      <Label20 />
      <Label21 />
      <Label22 />
      <Label23 />
      <Label24 />
      <Label25 />
      <Label26 />
      <Label27 />
      <Label28 />
      <Label29 />
      <Label30 />
      <Label31 />
      <Label32 />
      <Label33 />
      <Label34 />
      <Label35 />
      <Label36 />
      <Label37 />
      <Label38 />
      <Label39 />
      <Grid />
      <PropertyCombinations />
    </div>
  );
}

function ButtonObraAutodocs() {
  return (
    <div className="h-[2725px] relative shrink-0 w-[667px]" data-name="❖ Button — Obra Autodocs">
      <Documentation />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[64px] items-start p-[64px] relative shrink-0" data-name="Component">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-[320px]">Button - Nova</p>
      <ButtonObraAutodocs />
    </div>
  );
}

export default function ButtonNova1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Button - Nova">
      <div className="relative shrink-0 w-full" data-name=".Component Page Header">
        <div aria-hidden className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between p-[64px] relative size-full">
            <Text />
            <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0" data-name="Docs Button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center whitespace-nowrap">
                    <a className="[text-underline-position:from-font] block cursor-pointer decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] underline" href="https://ui.shadcn.com/docs/components/" target="_blank">
                      View documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Component />
      <div className="relative shrink-0 w-full" data-name=".Component Page Footer">
        <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[64px] py-[24px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[0px] whitespace-nowrap">
              <span className="leading-[20px] text-[14px]">{`Component documentation created using `}</span>
              <a className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[20px] text-[14px] underline" href="https://autodocs.obra.studio/" target="_blank">
                <span className="[text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://autodocs.obra.studio/" target="_blank">
                  Obra Autodocs
                </span>
              </a>
              <span className="leading-[20px] text-[14px]">.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}