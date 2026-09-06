import svgPaths from "./svg-ljw3opdgo2";
type BubbleNovaProps = {
  className?: string;
  reaction?: "None" | "Top Left" | "Top Right" | "Bottom Left" | "Bottom Right";
};

function BubbleNova({ className, reaction = "None" }: BubbleNovaProps) {
  const isTopLeft = reaction === "Top Left";
  const isTopLeftOrTopRight = ["Top Left", "Top Right"].includes(reaction);
  return (
    <div className={className || "relative"}>
      <div className={`flex flex-col justify-end size-full ${["Bottom Right", "Top Right", "None"].includes(reaction) ? "items-end" : ""}`}>
        <div className={`content-stretch flex flex-col justify-end relative size-full ${["Top Right", "None"].includes(reaction) ? "isolate items-end" : reaction === "Bottom Right" ? "items-end" : isTopLeft ? "isolate items-start" : "items-start"}`}>
          {["Bottom Left", "Bottom Right", "None"].includes(reaction) && (
            <div className={`bg-[#171717] max-w-[334px] relative rounded-[14px] shrink-0 ${reaction === "None" ? "z-[1]" : "mb-[-6px]"}`} data-name=".Bubble content">
              <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white w-full">Bubble text</p>
              </div>
            </div>
          )}
          {["Bottom Left", "Top Left", "Bottom Right", "Top Right"].includes(reaction) && (
            <div className={`bg-[#f5f5f5] relative rounded-[9999px] shrink-0 ${isTopLeftOrTopRight ? "mb-[-6px] z-[2]" : ""}`} data-name=".Reaction - Nova">
              <div aria-hidden className={`absolute border-2 border-solid border-white pointer-events-none rounded-[10001px] ${isTopLeft ? "inset-0" : "inset-[-2px]"}`} />
              <div className="flex flex-col items-center justify-center size-full">
                <div className={`content-stretch flex flex-col items-center justify-center px-[6px] py-[2px] relative size-full ${isTopLeft ? "bg-clip-padding border-2 border-[transparent] border-solid" : ""}`}>
                  <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">👍😮🔥👀 +8</p>
                </div>
              </div>
            </div>
          )}
          {isTopLeftOrTopRight && (
            <div className="bg-[#171717] max-w-[334px] relative rounded-[14px] shrink-0 z-[1]" data-name=".Bubble content">
              <div className={`content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full ${reaction === "Top Right" ? "" : "bg-clip-padding border-0 border-[transparent] border-solid"}`}>
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white w-full">Bubble text</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type BubbleGroupNovaProps = {
  className?: string;
  allignment?: "Left" | "Right";
  children?: React.ReactNode | null;
};

function BubbleGroupNova({ className, allignment = "Left", children = null }: BubbleGroupNovaProps) {
  const isRight = allignment === "Right";
  return (
    <div className={className || "relative w-[467px]"}>
      <div className={`flex flex-col justify-center size-full ${isRight ? "items-end" : ""}`}>
        <div className={`content-stretch flex flex-col justify-center relative size-full ${isRight ? "items-end" : "items-start"}`}>
          {allignment === "Left" && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bubble Group">
              {children || (
                <>
                  <BubbleNova className="relative shrink-0" />
                  <BubbleNova className="relative shrink-0" />
                </>
              )}
            </div>
          )}
          {isRight && (
            <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Bubble Group">
              {children || (
                <>
                  <BubbleNova className="relative shrink-0" />
                  <BubbleNova className="relative shrink-0" />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type CollapsibleTriggerProps = {
  className?: string;
  state?: "Default" | "Hover";
  variant?: boolean;
};

function CollapsibleTrigger({ className, state = "Default", variant = false }: CollapsibleTriggerProps) {
  const isHover = state === "Hover";
  const isVariant = variant;
  return (
    <div className={className || "bg-[rgba(255,255,255,0)] relative rounded-[10px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <div aria-hidden={isHover ? true : undefined} className={isHover ? "absolute border-[#737373] border-b border-solid inset-0 pointer-events-none" : '[word-break:break-word] flex flex-col font-["Geist:Medium",sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap'}>
              {state === "Default" && <p className="leading-[20px]">{variant && state === "Default" ? "Show less" : "Show more"}</p>}
            </div>
            {isHover && (
              <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[20px]">{variant && state === "Hover" ? "Show less" : !variant && state === "Hover" ? "Show more" : ""}</p>
              </div>
            )}
          </div>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
            <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height={isVariant ? "5.33313" : "5.33323"} preserveAspectRatio="none" viewBox={isVariant ? "0 0 9.33323 5.33313" : "0 0 9.33323 5.33323"} width="9.33323">
                <path d={isVariant ? svgPaths.p122adbf0 : svgPaths.p3ea36700} fill="#737373" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type BubbleContentProps = {
  className?: string;
  collapsible?: "Default" | "Open" | "Closed";
  variant?: "Primary" | "Secondary" | "Tinted" | "Destructive" | "Outline" | "Ghost";
};

function BubbleContent({ className, collapsible = "Default", variant = "Primary" }: BubbleContentProps) {
  const isDestructiveAndClosed = variant === "Destructive" && collapsible === "Closed";
  const isDestructiveAndOpen = variant === "Destructive" && collapsible === "Open";
  const isGhostAndClosed = variant === "Ghost" && collapsible === "Closed";
  const isGhostAndOpen = variant === "Ghost" && collapsible === "Open";
  const isOpenAndIsSecondaryOrDestructiveOrGhostOrTintedOrPrimary = collapsible === "Open" && ["Secondary", "Destructive", "Ghost", "Tinted", "Primary"].includes(variant);
  const isOutline = variant === "Outline";
  const isOutlineAndDefault = variant === "Outline" && collapsible === "Default";
  const isOutlineAndIsClosedOrOpen = variant === "Outline" && ["Closed", "Open"].includes(collapsible);
  const isOutlineAndOpen = variant === "Outline" && collapsible === "Open";
  const isPrimaryAndClosed = variant === "Primary" && collapsible === "Closed";
  const isPrimaryAndOpen = variant === "Primary" && collapsible === "Open";
  const isSecondaryAndClosed = variant === "Secondary" && collapsible === "Closed";
  const isSecondaryAndOpen = variant === "Secondary" && collapsible === "Open";
  const isTintedAndClosed = variant === "Tinted" && collapsible === "Closed";
  const isTintedAndOpen = variant === "Tinted" && collapsible === "Open";
  return (
    <div className={className || `relative rounded-[14px] ${isOutlineAndDefault ? "bg-white max-w-[334px]" : collapsible === "Default" && ["Tinted", "Ghost", "Destructive"].includes(variant) ? "max-w-[334px]" : variant === "Primary" && ["Closed", "Open"].includes(collapsible) ? "bg-[#171717]" : variant === "Tinted" && ["Closed", "Open"].includes(collapsible) ? "bg-[rgba(0,0,0,0.1)]" : variant === "Ghost" && ["Closed", "Open"].includes(collapsible) ? "bg-[rgba(255,255,255,0)]" : isOutlineAndIsClosedOrOpen ? "bg-white" : variant === "Destructive" && ["Closed", "Open"].includes(collapsible) ? "" : variant === "Secondary" && ["Closed", "Open"].includes(collapsible) ? "bg-[#f5f5f5]" : variant === "Secondary" && collapsible === "Default" ? "bg-[#f5f5f5] max-w-[334px]" : "bg-[#171717] max-w-[334px]"}`} style={variant === "Tinted" && collapsible === "Default" ? { backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" } : variant === "Destructive" ? { backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" } : undefined}>
      <div aria-hidden={isOutline ? true : undefined} className={isOutline ? "absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px]" : isSecondaryAndClosed || isDestructiveAndClosed || isGhostAndClosed || isTintedAndClosed || isPrimaryAndClosed || isSecondaryAndOpen || isDestructiveAndOpen || isGhostAndOpen || isTintedAndOpen || isPrimaryAndOpen ? "content-stretch flex flex-col gap-[4px] items-start px-[14px] py-[10px] relative size-full" : "content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full"}>
        {["Primary", "Secondary", "Destructive", "Ghost", "Tinted"].includes(variant) && <p className={`[word-break:break-word] font-["Geist:Regular",sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] ${variant === "Destructive" && collapsible === "Default" ? "text-[#dc2626] w-full" : isPrimaryAndOpen ? "text-white w-[310px]" : isDestructiveAndOpen ? "text-[#dc2626] w-[310px]" : collapsible === "Open" && ["Secondary", "Ghost", "Tinted"].includes(variant) ? "text-[#171717] w-[310px]" : isPrimaryAndClosed ? "overflow-hidden text-ellipsis text-white w-[310px]" : isDestructiveAndClosed ? "overflow-hidden text-[#dc2626] text-ellipsis w-[310px]" : collapsible === "Closed" && ["Secondary", "Ghost", "Tinted"].includes(variant) ? "overflow-hidden text-[#171717] text-ellipsis w-[310px]" : collapsible === "Default" && ["Secondary", "Tinted", "Ghost"].includes(variant) ? "text-[#171717] w-full" : "text-white w-full"}`}>Bubble text</p>}
        {(isSecondaryAndClosed || isDestructiveAndClosed || isGhostAndClosed || isTintedAndClosed || isPrimaryAndClosed || isSecondaryAndOpen || isDestructiveAndOpen || isGhostAndOpen || isTintedAndOpen || isPrimaryAndOpen) && (
          <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0" data-name=".Collapsible trigger">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[6px] items-center justify-center relative size-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[20px]">{isOpenAndIsSecondaryOrDestructiveOrGhostOrTintedOrPrimary ? "Show less" : collapsible === "Closed" && ["Secondary", "Destructive", "Ghost", "Tinted", "Primary"].includes(variant) ? "Show more" : ""}</p>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                  <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isOpenAndIsSecondaryOrDestructiveOrGhostOrTintedOrPrimary ? "5.33313" : "5.33323"} preserveAspectRatio="none" viewBox={isOpenAndIsSecondaryOrDestructiveOrGhostOrTintedOrPrimary ? "0 0 9.33323 5.33313" : "0 0 9.33323 5.33323"} width="9.33323">
                      <path d={isOpenAndIsSecondaryOrDestructiveOrGhostOrTintedOrPrimary ? svgPaths.p122adbf0 : svgPaths.p3ea36700} fill="#737373" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isOutline && (
        <div className={`content-stretch flex flex-col items-start px-[14px] py-[10px] relative size-full ${isOutlineAndDefault ? "max-w-[inherit]" : "gap-[4px]"}`}>
          <p className={`[word-break:break-word] font-["Geist:Regular",sans-serif] font-normal leading-[20px] relative shrink-0 text-[#171717] text-[14px] ${isOutlineAndDefault ? "w-full" : isOutlineAndOpen ? "w-[310px]" : "overflow-hidden text-ellipsis w-[310px]"}`}>Bubble text</p>
          {isOutlineAndIsClosedOrOpen && (
            <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0" data-name=".Collapsible trigger">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center relative size-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[20px]">{isOutlineAndOpen ? "Show less" : variant === "Outline" && collapsible === "Closed" ? "Show more" : ""}</p>
                    </div>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                    <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isOutlineAndOpen ? "5.33313" : "5.33323"} preserveAspectRatio="none" viewBox={isOutlineAndOpen ? "0 0 9.33323 5.33313" : "0 0 9.33323 5.33323"} width="9.33323">
                        <path d={isOutlineAndOpen ? svgPaths.p122adbf0 : svgPaths.p3ea36700} fill="#737373" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
type ReactionNovaProps = {
  className?: string;
  reactions?: string;
  variant?: "Reactions" | "Action Button" | "Emoji button" | "Icon buttons";
};

function ReactionNova({ className, reactions = "👍😮🔥👀 +8", variant = "Reactions" }: ReactionNovaProps) {
  const isActionButton = variant === "Action Button";
  const isEmojiButton = variant === "Emoji button";
  const isIconButtons = variant === "Icon buttons";
  return (
    <div className={className || `relative rounded-[9999px] ${isIconButtons ? "bg-white" : isEmojiButton ? "min-h-[24px]" : isActionButton ? "" : "bg-[#f5f5f5]"}`}>
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[10001px]" />
      <div className={`flex items-center justify-center size-full ${isIconButtons ? "flex-row" : isEmojiButton ? "flex-col min-h-[inherit]" : "flex-col"}`}>
        <div className={`content-stretch flex items-center justify-center relative size-full ${isIconButtons ? "gap-[4px]" : isEmojiButton ? "flex-col min-h-[inherit]" : isActionButton ? "flex-col" : "flex-col px-[6px] py-[2px]"}`}>
          {["Action Button", "Emoji button"].includes(variant) && (
            <div className={`relative shrink-0 ${isEmojiButton ? "bg-[#f5f5f5] h-[23px] rounded-[999px] w-[24px]" : "bg-white rounded-[8px]"}`} data-name="Button - Nova">
              <div aria-hidden={isActionButton ? true : undefined} className={isEmojiButton ? "flex flex-row items-center justify-center size-full" : "absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]"}>
                {isEmojiButton && (
                  <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[20px]">🎉</p>
                    </div>
                  </div>
                )}
              </div>
              {isActionButton && (
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
                      <p className="leading-[16px]">Button</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {variant === "Reactions" && <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">{reactions}</p>}
          {isIconButtons && (
            <>
              <div className="bg-[#f5f5f5] min-h-[22px] min-w-[22px] relative rounded-[8px] shrink-0" data-name="Icon Button - Nova">
                <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] p-[5px] relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon">
                      <div className="absolute inset-[4.17%_4.88%_4.17%_4.17%]" data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 10.9149 11" width="10.9149">
                          <path clipRule="evenodd" d={svgPaths.p32042600} fill="black" fillRule="evenodd" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] min-h-[22px] min-w-[22px] relative rounded-[8px] shrink-0" data-name="Icon Button - Nova">
                <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] p-[5px] relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon">
                      <div className="absolute inset-[4.17%_4.17%_4.17%_4.88%]" data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 10.9149 11" width="10.9149">
                          <path clipRule="evenodd" d={svgPaths.pb0e11c0} fill="black" fillRule="evenodd" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
type BubbleInteractiveNovaProps = {
  className?: string;
  state?: "Default" | "Hover" | "Focus";
  variant?: "Primary" | "Secondary" | "Tinted" | "Outline" | "Destructive" | "Ghost" | "Suggestion";
};

function BubbleInteractiveNova({ className, state = "Default", variant = "Primary" }: BubbleInteractiveNovaProps) {
  const isFocus = state === "Focus";
  const isGhostAndDefault = variant === "Ghost" && state === "Default";
  const isGhostAndHover = variant === "Ghost" && state === "Hover";
  const isOutlineAndDefault = variant === "Outline" && state === "Default";
  const isOutlineAndFocus = variant === "Outline" && state === "Focus";
  const isOutlineAndHover = variant === "Outline" && state === "Hover";
  const isPrimaryAndHover = variant === "Primary" && state === "Hover";
  const isSecondaryAndDefault = variant === "Secondary" && state === "Default";
  const isSecondaryAndHover = variant === "Secondary" && state === "Hover";
  const isSuggestionAndDefault = variant === "Suggestion" && state === "Default";
  const isSuggestionAndFocus = variant === "Suggestion" && state === "Focus";
  const isSuggestionAndHover = variant === "Suggestion" && state === "Hover";
  const isTintedAndDefault = variant === "Tinted" && state === "Default";
  const isTintedAndHover = variant === "Tinted" && state === "Hover";
  return (
    <div className={className || `max-w-[334px] relative rounded-[14px] ${variant === "Ghost" && state === "Focus" ? "bg-[rgba(255,255,255,0)] shadow-[0px_0px_0px_0px_#d4d4d4]" : isGhostAndHover ? "bg-[rgba(255,255,255,0)] opacity-90" : isGhostAndDefault ? "bg-[rgba(255,255,255,0)]" : state === "Hover" && ["Outline", "Suggestion"].includes(variant) ? "bg-white opacity-90" : isOutlineAndDefault || isSuggestionAndDefault || isOutlineAndFocus || isSuggestionAndFocus ? "bg-white" : state === "Focus" && ["Tinted", "Destructive"].includes(variant) ? "shadow-[0px_0px_0px_0px_#d4d4d4]" : state === "Hover" && ["Tinted", "Destructive"].includes(variant) ? "opacity-90" : state === "Default" && ["Tinted", "Destructive"].includes(variant) ? "" : variant === "Secondary" && state === "Focus" ? "bg-[#f5f5f5] shadow-[0px_0px_0px_0px_#d4d4d4]" : isSecondaryAndHover ? "bg-[#f5f5f5] opacity-90" : isSecondaryAndDefault ? "bg-[#f5f5f5]" : variant === "Primary" && state === "Focus" ? "bg-[#171717] shadow-[0px_0px_0px_0px_#d4d4d4]" : isPrimaryAndHover ? "bg-[#171717] opacity-90" : "bg-[#171717]"}`} style={variant === "Destructive" ? { backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" } : variant === "Tinted" ? { backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" } : undefined}>
      <div aria-hidden={isOutlineAndDefault || isSuggestionAndDefault || isOutlineAndHover || isSuggestionAndHover ? true : undefined} className={variant === "Suggestion" && ["Default", "Hover"].includes(state) ? "absolute border border-black border-dashed inset-0 pointer-events-none rounded-[14px]" : variant === "Outline" && ["Default", "Hover"].includes(state) ? "absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px]" : isFocus ? "max-w-[inherit] overflow-clip rounded-[inherit] size-full" : "content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full"}>
        {((variant === "Primary" && state === "Default") || isPrimaryAndHover || isSecondaryAndDefault || isSecondaryAndHover || isTintedAndDefault || isTintedAndHover || isGhostAndDefault || isGhostAndHover || (variant === "Destructive" && state === "Default") || (variant === "Destructive" && state === "Hover")) && <p className={`[word-break:break-word] font-["Geist:Regular",sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full ${variant === "Destructive" && ["Default", "Hover"].includes(state) ? "text-[#dc2626]" : isSecondaryAndDefault || isSecondaryAndHover || isTintedAndDefault || isTintedAndHover || isGhostAndDefault || isGhostAndHover ? "text-[#171717]" : "text-white"}`}>Bubble text</p>}
        {isFocus && (
          <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
            <p className={`[word-break:break-word] font-["Geist:Regular",sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full ${variant === "Destructive" && state === "Focus" ? "text-[#dc2626]" : state === "Focus" && ["Secondary", "Tinted", "Outline", "Suggestion", "Ghost"].includes(variant) ? "text-[#171717]" : "text-white"}`}>Bubble text</p>
          </div>
        )}
      </div>
      {["Outline", "Suggestion"].includes(variant) && (
        <div aria-hidden={state === "Focus" && ["Outline", "Suggestion"].includes(variant) ? true : undefined} className={isSuggestionAndFocus ? "absolute border border-black border-dashed inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_0px_#d4d4d4]" : isOutlineAndFocus ? "absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_0px_#d4d4d4]" : "content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full"}>
          {(isOutlineAndDefault || isSuggestionAndDefault || isOutlineAndHover || isSuggestionAndHover) && <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#171717] text-[14px] w-full">Bubble text</p>}
        </div>
      )}
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-[#737373] w-full" data-name="Text">
      <p className="leading-[24px] relative shrink-0 text-[16px] w-full">Displays conversational content in a message bubble. Supports variants, alignment, grouping, reactions, and collapsible content.</p>
      <p className="leading-[20px] relative shrink-0 text-[14px] w-full">You can change the max width of the bubble content</p>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Text">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[40px] text-black tracking-[-1.5px] w-full">Bubble - Nova</p>
      <Text1 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute h-[25px] left-0 top-0 w-[146px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[33px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">Reaction: None</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute h-[25px] left-[146px] top-0 w-[146px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">Reaction: Bottom Left</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute h-[25px] left-[292px] top-0 w-[146px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[13px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">Reaction: Bottom Right</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute h-[25px] left-[438px] top-0 w-[146px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[25.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">Reaction: Top Left</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute h-[25px] left-[584px] top-0 w-[146px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[22.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">Reaction: Top Right</p>
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute h-[124px] left-0 top-[25px] w-[730px]" data-name="Grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="124" preserveAspectRatio="none" viewBox="0 0 730 124" width="730">
        <g id="Grid">
          <line id="Line" stroke="#9747FF" strokeDasharray="4 4" x1="146.5" x2="146.5" y2="124" />
          <line id="Line_2" stroke="#9747FF" strokeDasharray="4 4" x1="292.5" x2="292.5" y2="124" />
          <line id="Line_3" stroke="#9747FF" strokeDasharray="4 4" x1="438.5" x2="438.5" y2="124" />
          <line id="Line_4" stroke="#9747FF" strokeDasharray="4 4" x1="584.5" x2="584.5" y2="124" />
        </g>
      </svg>
    </div>
  );
}

function Documentation() {
  return (
    <div className="absolute h-[149px] left-0 top-0 w-[730px]" data-name="Documentation">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
      <Grid />
    </div>
  );
}

function BubbleNovaObraAutodocs() {
  return (
    <div className="h-[149px] relative shrink-0 w-[730px]" data-name="❖ Bubble - Nova — Obra Autodocs">
      <Documentation />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[64px] items-start p-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-[320px]">Bubble - Nova</p>
        <BubbleNovaObraAutodocs />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute h-[96px] left-0 top-[40px] w-[104px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#9747ff] text-[11px] top-[41.5px] whitespace-nowrap">Allignment: Left</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute h-[96px] left-0 top-[176px] w-[104px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[10px] not-italic text-[#9747ff] text-[11px] top-[41.5px] whitespace-nowrap">Allignment: Right</p>
    </div>
  );
}

function Grid1() {
  return (
    <div className="absolute h-[312px] left-[104px] top-0 w-[547px]" data-name="Grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="312" preserveAspectRatio="none" viewBox="0 0 547 312" width="547">
        <g id="Grid">
          <line id="Line" stroke="#9747FF" strokeDasharray="4 4" x2="547" y1="155.5" y2="155.5" />
        </g>
      </svg>
    </div>
  );
}

function Documentation1() {
  return (
    <div className="absolute h-[312px] left-0 top-0 w-[651px]" data-name="Documentation">
      <Label5 />
      <Label6 />
      <Grid1 />
    </div>
  );
}

function BubbleGroupNovaObraAutodocs() {
  return (
    <div className="h-[312px] relative shrink-0 w-[651px]" data-name="❖ Bubble group - Nova — Obra Autodocs">
      <Documentation1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[64px] items-start p-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-[320px]">Bubble Group - Nova</p>
        <BubbleGroupNovaObraAutodocs />
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute h-[44px] left-0 top-[61px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[30px] not-italic text-[#9747ff] text-[11px] top-[15.5px] whitespace-nowrap">Variant: Primary</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute h-[36px] left-0 top-[141px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[14px] not-italic text-[#9747ff] text-[11px] top-[11.5px] whitespace-nowrap">Variant: Secondary</p>
    </div>
  );
}

function Label9() {
  return (
    <div className="absolute h-[36px] left-0 top-[217px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[37px] not-italic text-[#9747ff] text-[11px] top-[11.5px] whitespace-nowrap">Variant: Tinted</p>
    </div>
  );
}

function Label10() {
  return (
    <div className="absolute h-[36px] left-0 top-[293px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[33px] not-italic text-[#9747ff] text-[11px] top-[11.5px] whitespace-nowrap">Variant: Outline</p>
    </div>
  );
}

function Label11() {
  return (
    <div className="absolute h-[36px] left-0 top-[369px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[10px] not-italic text-[#9747ff] text-[11px] top-[11.5px] whitespace-nowrap">Variant: Destructive</p>
    </div>
  );
}

function Label12() {
  return (
    <div className="absolute h-[36px] left-0 top-[445px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[39px] not-italic text-[#9747ff] text-[11px] top-[11.5px] whitespace-nowrap">Variant: Ghost</p>
    </div>
  );
}

function Label13() {
  return (
    <div className="absolute h-[36px] left-0 top-[521px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[11px] not-italic text-[#9747ff] text-[11px] top-[11.5px] whitespace-nowrap">Variant: Suggestion</p>
    </div>
  );
}

function Label14() {
  return (
    <div className="absolute h-[25px] left-[155px] top-0 w-[106px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">State: Default</p>
    </div>
  );
}

function Label15() {
  return (
    <div className="absolute h-[25px] left-[297px] top-0 w-[98px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">State: Hover</p>
    </div>
  );
}

function Label16() {
  return (
    <div className="absolute h-[25px] left-[435px] top-0 w-[98px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">State: Focus</p>
    </div>
  );
}

function Grid2() {
  return (
    <div className="absolute h-[572px] left-[119px] top-[25px] w-[454px]" data-name="Grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="572" preserveAspectRatio="none" viewBox="0 0 454 572" width="454">
        <g id="Grid">
          <line id="Line" stroke="#9747FF" strokeDasharray="4 4" x2="454" y1="97.5" y2="97.5" />
          <line id="Line_2" stroke="#9747FF" strokeDasharray="4 4" x2="454" y1="171.5" y2="171.5" />
          <line id="Line_3" stroke="#9747FF" strokeDasharray="4 4" x2="454" y1="247.5" y2="247.5" />
          <line id="Line_4" stroke="#9747FF" strokeDasharray="4 4" x2="454" y1="323.5" y2="323.5" />
          <line id="Line_5" stroke="#9747FF" strokeDasharray="4 4" x2="454" y1="399.5" y2="399.5" />
          <line id="Line_6" stroke="#9747FF" strokeDasharray="4 4" x2="454" y1="475.5" y2="475.5" />
          <line id="Line_7" stroke="#9747FF" strokeDasharray="4 4" x1="160.5" x2="160.5" y2="572" />
          <line id="Line_8" stroke="#9747FF" strokeDasharray="4 4" x1="296.5" x2="296.5" y2="572" />
        </g>
      </svg>
    </div>
  );
}

function Documentation2() {
  return (
    <div className="absolute h-[597px] left-0 top-0 w-[573px]" data-name="Documentation">
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
      <Grid2 />
    </div>
  );
}

function BubbleInteractiveNovaObraAutodocs() {
  return (
    <div className="h-[597px] relative shrink-0 w-[573px]" data-name="❖ Bubble interactive - Nova — Obra Autodocs">
      <Documentation2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[64px] items-start p-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-[320px]">Bubble interactive - Nova</p>
        <BubbleInteractiveNovaObraAutodocs />
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="absolute h-[62.667px] left-0 top-0 w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[30px] not-italic text-[#9747ff] text-[11px] top-[24.83px] whitespace-nowrap">Variant: Reactions</p>
    </div>
  );
}

function Label18() {
  return (
    <div className="absolute h-[62.667px] left-0 top-[62.67px] w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[10px] not-italic text-[#9747ff] text-[11px] top-[24.83px] whitespace-nowrap">Variant: Action Button</p>
    </div>
  );
}

function Label19() {
  return (
    <div className="absolute h-[62.667px] left-0 top-[125.33px] w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#9747ff] text-[11px] top-[24.83px] whitespace-nowrap">Variant: Emoji button</p>
    </div>
  );
}

function Label20() {
  return (
    <div className="absolute h-[62.667px] left-0 top-[188px] w-[130px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#9747ff] text-[11px] top-[24.83px] whitespace-nowrap">Variant: Icon buttons</p>
    </div>
  );
}

function Grid3() {
  return (
    <div className="absolute h-[250.667px] left-[130px] top-0 w-[168px]" data-name="Grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="250.667" preserveAspectRatio="none" viewBox="0 0 168 250.667" width="168">
        <g id="Grid">
          <line id="Line" stroke="#9747FF" strokeDasharray="4 4" x2="168" y1="62.1667" y2="62.1667" />
          <line id="Line_2" stroke="#9747FF" strokeDasharray="4 4" x2="168" y1="124.833" y2="124.833" />
          <line id="Line_3" stroke="#9747FF" strokeDasharray="4 4" x2="168" y1="187.5" y2="187.5" />
        </g>
      </svg>
    </div>
  );
}

function Documentation3() {
  return (
    <div className="absolute h-[250.667px] left-0 top-0 w-[298px]" data-name="Documentation">
      <Label17 />
      <Label18 />
      <Label19 />
      <Label20 />
      <Grid3 />
    </div>
  );
}

function ReactionObraAutodocs() {
  return (
    <div className="h-[250.667px] relative shrink-0 w-[298px]" data-name="❖ Reaction — Obra Autodocs">
      <Documentation3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[64px] items-start p-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-[320px]">.Reaction</p>
        <ReactionObraAutodocs />
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="absolute h-[68px] left-0 top-[61px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[30px] not-italic text-[#9747ff] text-[11px] top-[27.5px] whitespace-nowrap">Variant: Primary</p>
    </div>
  );
}

function Label22() {
  return (
    <div className="absolute h-[68px] left-0 top-[161px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[14px] not-italic text-[#9747ff] text-[11px] top-[27.5px] whitespace-nowrap">Variant: Secondary</p>
    </div>
  );
}

function Label23() {
  return (
    <div className="absolute h-[68px] left-0 top-[261px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[37px] not-italic text-[#9747ff] text-[11px] top-[27.5px] whitespace-nowrap">Variant: Tinted</p>
    </div>
  );
}

function Label24() {
  return (
    <div className="absolute h-[68px] left-0 top-[361px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[33px] not-italic text-[#9747ff] text-[11px] top-[27.5px] whitespace-nowrap">Variant: Outline</p>
    </div>
  );
}

function Label25() {
  return (
    <div className="absolute h-[68px] left-0 top-[461px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[10px] not-italic text-[#9747ff] text-[11px] top-[27.5px] whitespace-nowrap">Variant: Destructive</p>
    </div>
  );
}

function Label26() {
  return (
    <div className="absolute h-[68px] left-0 top-[561px] w-[119px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[39px] not-italic text-[#9747ff] text-[11px] top-[27.5px] whitespace-nowrap">Variant: Ghost</p>
    </div>
  );
}

function Label27() {
  return (
    <div className="absolute h-[25px] left-[155px] top-0 w-[106px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[2.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">Collapsible: Default</p>
    </div>
  );
}

function Label28() {
  return (
    <div className="absolute h-[25px] left-[293px] top-0 w-[342px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[121px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">Collapsible: Closed</p>
    </div>
  );
}

function Label29() {
  return (
    <div className="absolute h-[25px] left-[667px] top-0 w-[342px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[125.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">Collapsible: Open</p>
    </div>
  );
}

function Grid4() {
  return (
    <div className="absolute h-[640px] left-[119px] top-[25px] w-[926px]" data-name="Grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="640" preserveAspectRatio="none" viewBox="0 0 926 640" width="926">
        <g id="Grid">
          <line id="Line" stroke="#9747FF" strokeDasharray="4 4" x2="926" y1="119.5" y2="119.5" />
          <line id="Line_2" stroke="#9747FF" strokeDasharray="4 4" x2="926" y1="219.5" y2="219.5" />
          <line id="Line_3" stroke="#9747FF" strokeDasharray="4 4" x2="926" y1="319.5" y2="319.5" />
          <line id="Line_4" stroke="#9747FF" strokeDasharray="4 4" x2="926" y1="419.5" y2="419.5" />
          <line id="Line_5" stroke="#9747FF" strokeDasharray="4 4" x2="926" y1="519.5" y2="519.5" />
          <line id="Line_6" stroke="#9747FF" strokeDasharray="4 4" x1="158.5" x2="158.5" y2="640" />
          <line id="Line_7" stroke="#9747FF" strokeDasharray="4 4" x1="532.5" x2="532.5" y2="640" />
        </g>
      </svg>
    </div>
  );
}

function Documentation4() {
  return (
    <div className="absolute h-[665px] left-0 top-0 w-[1045px]" data-name="Documentation">
      <Label21 />
      <Label22 />
      <Label23 />
      <Label24 />
      <Label25 />
      <Label26 />
      <Label27 />
      <Label28 />
      <Label29 />
      <Grid4 />
    </div>
  );
}

function BubbleContentObraAutodocs() {
  return (
    <div className="h-[665px] relative shrink-0 w-[1045px]" data-name="❖ .Bubble content — Obra Autodocs">
      <Documentation4 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[64px] items-start p-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-[320px]">.Bubble Content</p>
        <BubbleContentObraAutodocs />
      </div>
    </div>
  );
}

function Label30() {
  return (
    <div className="absolute h-[60px] left-0 top-[25px] w-[95px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[10px] not-italic text-[#9747ff] text-[11px] top-[23.5px] whitespace-nowrap">Variant: Closed</p>
    </div>
  );
}

function Label31() {
  return (
    <div className="absolute h-[60px] left-0 top-[85px] w-[95px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[18px] not-italic text-[#9747ff] text-[11px] top-[23.5px] whitespace-nowrap">Variant: Open</p>
    </div>
  );
}

function Label32() {
  return (
    <div className="absolute h-[25px] left-[135px] top-0 w-[96px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[12.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">State: Default</p>
    </div>
  );
}

function Label33() {
  return (
    <div className="absolute h-[25px] left-[271px] top-0 w-[96px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[15.5px] not-italic text-[#9747ff] text-[11px] top-[6px] whitespace-nowrap">State: Hover</p>
    </div>
  );
}

function Grid5() {
  return (
    <div className="absolute h-[120px] left-[95px] top-[25px] w-[312px]" data-name="Grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="120" preserveAspectRatio="none" viewBox="0 0 312 120" width="312">
        <g id="Grid">
          <line id="Line" stroke="#9747FF" strokeDasharray="4 4" x2="312" y1="59.5" y2="59.5" />
          <line id="Line_2" stroke="#9747FF" strokeDasharray="4 4" x1="156.5" x2="156.5" y2="120" />
        </g>
      </svg>
    </div>
  );
}

function Documentation5() {
  return (
    <div className="absolute h-[145px] left-0 top-0 w-[407px]" data-name="Documentation">
      <Label30 />
      <Label31 />
      <Label32 />
      <Label33 />
      <Grid5 />
    </div>
  );
}

function CollapsibleTriggerObraAutodocs() {
  return (
    <div className="h-[145px] relative shrink-0 w-[407px]" data-name="❖ .Collapsible trigger — Obra Autodocs">
      <Documentation5 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[64px] items-start p-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-[320px]">.Collapsible trigger</p>
        <CollapsibleTriggerObraAutodocs />
      </div>
    </div>
  );
}

function BubbleGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bubble Group">
      <div className="relative shrink-0" data-name="Bubble - Nova">
        <div className="flex flex-col items-end justify-end size-full">
          <div className="content-stretch flex flex-col isolate items-end justify-end relative size-full">
            <div className="bg-[#f5f5f5] max-w-[334px] relative rounded-[14px] shrink-0 z-[1]" data-name=".Bubble content">
              <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#171717] text-[14px] w-full">Secondary bubbles are the standard neutral surface for assistant and conversation content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Bubble - Nova">
        <div className="flex flex-col items-end justify-end size-full">
          <div className="content-stretch flex flex-col isolate items-end justify-end relative size-full">
            <div className="max-w-[334px] relative rounded-[14px] shrink-0 z-[1]" data-name=".Bubble content">
              <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">
                  Ghost bubbles work for assistant text and other content that should not be framed.
                  <br aria-hidden />
                  <br aria-hidden />
                  This is perfect for assistant messages that should not have a frame and can take the full width of the container.
                  <br aria-hidden />
                  <br aria-hidden />
                  Ghost bubbles are full width and can take the full width of the container.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Show more</p>
      </div>
    </div>
  );
}

function BubbleGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bubble Group">
      <div className="relative shrink-0" data-name="Bubble - Nova">
        <div className="flex flex-col items-end justify-end size-full">
          <div className="content-stretch flex flex-col isolate items-end justify-end relative size-full">
            <div className="bg-[rgba(255,255,255,0)] relative rounded-[14px] shrink-0 z-[1]" data-name=".Bubble content">
              <div className="content-stretch flex flex-col gap-[4px] items-start px-[14px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis w-[310px] whitespace-pre-wrap">{`The accessibility review found two focus states that were visually too subtle in dark mode.  I checked the dialog, menu, and drawer paths because each one renders focusable control The accessibility review found two focus states that were visually too subtle in dark mode.  I checked the dialog, menu, and drawer paths because each one renders focusable controlThe accessibility review found two focus states that were visually too subtle in dark mode.  I checked the dialog, menu, and drawer paths because each one renders focusable controlThe accessibility review found two focus states that were visually too subtle in dark mode.  I checked the dialog, menu, and drawer paths because each one renders focusable control`}</p>
                <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0" data-name=".Collapsible trigger">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[6px] items-center justify-center relative size-full">
                      <Frame />
                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
                        <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="5.33323" preserveAspectRatio="none" viewBox="0 0 9.33323 5.33323" width="9.33323">
                            <path d={svgPaths.p3ea36700} fill="#737373" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Bubble - Nova">
        <div className="flex flex-col items-end justify-end size-full">
          <div className="content-stretch flex flex-col isolate items-end justify-end relative size-full">
            <div className="max-w-[334px] relative rounded-[14px] shrink-0 z-[1]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name=".Bubble content">
              <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#dc2626] text-[14px] w-full">Destructive bubbles flag errors or failed actions in a conversation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Bubble - Nova">
        <div className="flex flex-col items-end justify-end size-full">
          <div className="content-stretch flex flex-col isolate items-end justify-end relative size-full">
            <div className="bg-[#f5f5f5] max-w-[334px] relative rounded-[14px] shrink-0 z-[1]" data-name=".Bubble content">
              <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#171717] text-[14px] w-full">I finished the audit pass.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BubbleGroup2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Bubble Group">
      <div className="relative shrink-0" data-name="Bubble - Nova">
        <div className="flex flex-col items-end justify-end size-full">
          <div className="content-stretch flex flex-col isolate items-end justify-end relative size-full">
            <div className="max-w-[334px] relative rounded-[14px] shrink-0 z-[1]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name=".Bubble content">
              <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#171717] text-[14px] w-full">Tinted bubbles use a softer primary tint when primary fill is too strong.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BubbleGroup3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Bubble Group">
      <div className="relative shrink-0" data-name="Bubble - Nova">
        <div className="flex flex-col items-end justify-end size-full">
          <div className="content-stretch flex flex-col isolate items-end justify-end relative size-full">
            <div className="max-w-[334px] relative rounded-[14px] shrink-0 z-[1]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name=".Bubble content">
              <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#171717] text-[14px] w-full">Another message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Bubble - Nova">
        <div className="flex flex-col items-end justify-end size-full">
          <div className="content-stretch flex flex-col items-end justify-end relative size-full">
            <div className="max-w-[334px] mb-[-6px] relative rounded-[14px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name=".Bubble content">
              <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#171717] text-[14px] w-full">A longer message that wraps across lines so the reaction offset is easier to inspect.</p>
              </div>
            </div>
            <div className="bg-[#f5f5f5] relative rounded-[9999px] shrink-0" data-name=".Reaction - Nova">
              <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[10001px]" />
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center px-[6px] py-[2px] relative size-full">
                  <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">👍😮🔥👀 +8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Everything() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[545px]" data-name="Everything">
      <div className="relative shrink-0 w-[467px]" data-name="Bubble group - Nova">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <BubbleGroup />
          </div>
        </div>
      </div>
      <BubbleGroupNova allignment="Right" className="relative shrink-0 w-full">
        <div className="relative shrink-0" data-name="Bubble - Nova">
          <div className="flex flex-col items-end justify-end size-full">
            <div className="content-stretch flex flex-col isolate items-end justify-end relative size-full">
              <div className="bg-[#171717] max-w-[334px] relative rounded-[14px] shrink-0 z-[1]" data-name=".Bubble content">
                <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-[10px] relative size-full">
                  <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white w-full">Default bubbles use the primary color for the active user side of a chat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BubbleGroupNova>
      <div className="relative shrink-0 w-[467px]" data-name="Bubble group - Nova">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <BubbleGroup1 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Bubble group - Nova">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <BubbleGroup2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Bubble group - Nova">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <BubbleGroup3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Examples() {
  return (
    <div className="relative shrink-0 w-full" data-name="Examples">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[64px] items-start p-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[#737373] text-[22px] tracking-[-0.5px] w-[320px]">Examples</p>
        <Everything />
      </div>
    </div>
  );
}

export default function BubbleNova1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Bubble - Nova">
      <div className="relative shrink-0 w-full" data-name=".Component Page Header">
        <div aria-hidden className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between p-[64px] relative size-full">
            <Text />
            <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0" data-name="Docs Button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative size-full">
                  <a className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap" href="https://ui.shadcn.com/docs/components/bubble" target="_blank">
                    <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[20px] underline">View documentation</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Examples />
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