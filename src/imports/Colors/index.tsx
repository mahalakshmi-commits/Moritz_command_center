function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#737373] text-[16px] w-full whitespace-pre-wrap">{`Colors are divided in 2 sections: raw tailwind colors, and shadn theme colors.  Note that not all tailwind colors appear in shadn/ui create (Slate and Gray are missing)`}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[40px] text-black tracking-[-1.5px] w-full">Colors</p>
      <Text1 />
    </div>
  );
}

function InUse() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">In use</p>
      </div>
    </div>
  );
}

function Note() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[320px]" data-name="Note">
      <InUse />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[16px] min-w-px relative text-[#737373] text-[12px]">If you did not customize the kit and want to simplify, you can safely delete the colors not in use. All neutral values are used, as well as 5 red values.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[320px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[26.4px] min-w-full relative shrink-0 text-[22px] text-black tracking-[-0.5px] w-[min-content]">Raw Colors</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#737373] text-[16px] w-[min-content]">Based on Tailwind v4.2. Note that Taupe, Mauve, Mist and Olive are new since 4.2.</p>
      <Note />
    </div>
  );
}

function TitleSpacer() {
  return <div className="h-[24px] relative shrink-0 w-[40px]" data-name="__title spacer" />;
}

function Values() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[40px] relative shrink-0" data-name="Values">
      <TitleSpacer />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[64px] justify-center leading-[0] min-w-full relative shrink-0 text-[#737373] text-[14px] w-[min-content]">
        <p className="leading-[20px]">50</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">100</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">200</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">300</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">400</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">500</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">600</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">700</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">800</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">900</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">950</p>
      </div>
    </div>
  );
}

function InUse1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#FAFAFA</p>
      </div>
    </div>
  );
}

function SwatchHolder() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fafafa] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse1 />
    </div>
  );
}

function InUse2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#F5F5F5</p>
      </div>
    </div>
  );
}

function SwatchHolder1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f5f5f5] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse2 />
    </div>
  );
}

function InUse3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#E5E5E5</p>
      </div>
    </div>
  );
}

function SwatchHolder2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#e5e5e5] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse3 />
    </div>
  );
}

function InUse4() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#D4D4D4</p>
      </div>
    </div>
  );
}

function SwatchHolder3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#d4d4d4] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse4 />
    </div>
  );
}

function InUse5() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#A3A3A3</p>
      </div>
    </div>
  );
}

function SwatchHolder4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#a3a3a3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse5 />
    </div>
  );
}

function InUse6() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#737373</p>
      </div>
    </div>
  );
}

function SwatchHolder5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#737373] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse6 />
    </div>
  );
}

function InUse7() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#525252</p>
      </div>
    </div>
  );
}

function SwatchHolder6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#525252] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse7 />
    </div>
  );
}

function InUse8() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#404040</p>
      </div>
    </div>
  );
}

function SwatchHolder7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#404040] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse8 />
    </div>
  );
}

function InUse9() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#262626</p>
      </div>
    </div>
  );
}

function SwatchHolder8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#262626] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse9 />
    </div>
  );
}

function InUse10() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#171717</p>
      </div>
    </div>
  );
}

function SwatchHolder9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#171717] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse10 />
    </div>
  );
}

function InUse11() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#0A0A0A</p>
      </div>
    </div>
  );
}

function SwatchHolder10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#0a0a0a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse11 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Neutral (All Used)</p>
      </div>
      <SwatchHolder />
      <SwatchHolder1 />
      <SwatchHolder2 />
      <SwatchHolder3 />
      <SwatchHolder4 />
      <SwatchHolder5 />
      <SwatchHolder6 />
      <SwatchHolder7 />
      <SwatchHolder8 />
      <SwatchHolder9 />
      <SwatchHolder10 />
    </div>
  );
}

function SwatchHolder11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#fef2f2] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#FEF2F2</p>
      </div>
    </div>
  );
}

function SwatchHolder12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#ffe2e2] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#FFE2E2</p>
      </div>
    </div>
  );
}

function SwatchHolder13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#fecaca] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#FECACA</p>
      </div>
    </div>
  );
}

function InUse12() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#FCA5A5</p>
      </div>
    </div>
  );
}

function SwatchHolder14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#fca5a5] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse12 />
    </div>
  );
}

function InUse13() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#F87171</p>
      </div>
    </div>
  );
}

function SwatchHolder15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#f87171] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse13 />
    </div>
  );
}

function SwatchHolder16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#ef4444] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#EF4444</p>
      </div>
    </div>
  );
}

function InUse14() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#DC2626</p>
      </div>
    </div>
  );
}

function SwatchHolder17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#dc2626] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse14 />
    </div>
  );
}

function SwatchHolder18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#b91c1c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#B91C1C</p>
      </div>
    </div>
  );
}

function SwatchHolder19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#991b1b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#991B1B</p>
      </div>
    </div>
  );
}

function InUse15() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="In use">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#7F1D1D</p>
      </div>
    </div>
  );
}

function SwatchHolder20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#7f1d1d] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <InUse15 />
    </div>
  );
}

function SwatchHolder21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#450a0a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#450A0A</p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[20px]">Red (4 Used)</p>
      </div>
      <SwatchHolder11 />
      <SwatchHolder12 />
      <SwatchHolder13 />
      <SwatchHolder14 />
      <SwatchHolder15 />
      <SwatchHolder16 />
      <SwatchHolder17 />
      <SwatchHolder18 />
      <SwatchHolder19 />
      <SwatchHolder20 />
      <SwatchHolder21 />
    </div>
  );
}

function SwatchHolder22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#eff6ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#EFF6FF</p>
      </div>
    </div>
  );
}

function SwatchHolder23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#dbeafe] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#DBEAFE</p>
      </div>
    </div>
  );
}

function SwatchHolder24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#bfdbfe] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#BFDBFE</p>
      </div>
    </div>
  );
}

function SwatchHolder25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#93c5fd] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#93C5FD</p>
      </div>
    </div>
  );
}

function SwatchHolder26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#60a5fa] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#60A5FA</p>
      </div>
    </div>
  );
}

function SwatchHolder27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#3b82f6] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#3B82F6</p>
      </div>
    </div>
  );
}

function SwatchHolder28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#2563eb] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#2563EB</p>
      </div>
    </div>
  );
}

function SwatchHolder29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#1d4ed8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#1D4ED8</p>
      </div>
    </div>
  );
}

function SwatchHolder30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#1e40af] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#1E40AF</p>
      </div>
    </div>
  );
}

function SwatchHolder31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#1e3a8a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#1E3A8A</p>
      </div>
    </div>
  );
}

function SwatchHolder32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#172554] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#172554</p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Blue</p>
      </div>
      <SwatchHolder22 />
      <SwatchHolder23 />
      <SwatchHolder24 />
      <SwatchHolder25 />
      <SwatchHolder26 />
      <SwatchHolder27 />
      <SwatchHolder28 />
      <SwatchHolder29 />
      <SwatchHolder30 />
      <SwatchHolder31 />
      <SwatchHolder32 />
    </div>
  );
}

function SwatchHolder33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#f8fafc] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F8FAFC</p>
    </div>
  );
}

function SwatchHolder34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#f1f5f9] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F1F5F9</p>
    </div>
  );
}

function SwatchHolder35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#e2e8f0] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E2E8F0</p>
    </div>
  );
}

function SwatchHolder36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#cbd5e1] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#CBD5E1</p>
    </div>
  );
}

function SwatchHolder37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#94a3b8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#94A3B8</p>
    </div>
  );
}

function SwatchHolder38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#64748b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#64748B</p>
    </div>
  );
}

function SwatchHolder39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#475569] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#475569</p>
    </div>
  );
}

function SwatchHolder40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#334155] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#334155</p>
    </div>
  );
}

function SwatchHolder41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#1e293b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#1E293B</p>
    </div>
  );
}

function SwatchHolder42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[152px]" data-name="Swatch holder">
      <div className="bg-[#0f172a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0F172A</p>
    </div>
  );
}

function SwatchHolder43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#020617] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#020617</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Slate</p>
      </div>
      <SwatchHolder33 />
      <SwatchHolder34 />
      <SwatchHolder35 />
      <SwatchHolder36 />
      <SwatchHolder37 />
      <SwatchHolder38 />
      <SwatchHolder39 />
      <SwatchHolder40 />
      <SwatchHolder41 />
      <SwatchHolder42 />
      <SwatchHolder43 />
    </div>
  );
}

function SwatchHolder44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#f9fafb] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F9FAFB</p>
    </div>
  );
}

function SwatchHolder45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#f3f4f6] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F3F4F6</p>
    </div>
  );
}

function SwatchHolder46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#e5e7eb] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E5E7EB</p>
    </div>
  );
}

function SwatchHolder47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#d1d5db] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D1D5DB</p>
    </div>
  );
}

function SwatchHolder48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#9ca3af] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#9CA3AF</p>
    </div>
  );
}

function SwatchHolder49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#6b7280] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#6B7280</p>
    </div>
  );
}

function SwatchHolder50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#4b5563] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#4B5563</p>
    </div>
  );
}

function SwatchHolder51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#374151] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#374151</p>
    </div>
  );
}

function SwatchHolder52() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#1f2937] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#1F2937</p>
    </div>
  );
}

function SwatchHolder53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[152px]" data-name="Swatch holder">
      <div className="bg-[#111827] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#111827</p>
    </div>
  );
}

function SwatchHolder54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#030712] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#030712</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Gray</p>
      </div>
      <SwatchHolder44 />
      <SwatchHolder45 />
      <SwatchHolder46 />
      <SwatchHolder47 />
      <SwatchHolder48 />
      <SwatchHolder49 />
      <SwatchHolder50 />
      <SwatchHolder51 />
      <SwatchHolder52 />
      <SwatchHolder53 />
      <SwatchHolder54 />
    </div>
  );
}

function SwatchHolder55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fafafa] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FAFAFA</p>
    </div>
  );
}

function SwatchHolder56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f4f4f5] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F4F4F5</p>
    </div>
  );
}

function SwatchHolder57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e4e4e7] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E4E4E7</p>
    </div>
  );
}

function SwatchHolder58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d4d4d8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D4D4D8</p>
    </div>
  );
}

function SwatchHolder59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a1a1aa] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A1A1AA</p>
    </div>
  );
}

function SwatchHolder60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#71717a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#71717A</p>
    </div>
  );
}

function SwatchHolder61() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#52525b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#52525B</p>
    </div>
  );
}

function SwatchHolder62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#3f3f46] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#3F3F46</p>
    </div>
  );
}

function SwatchHolder63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#27272a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#27272A</p>
    </div>
  );
}

function SwatchHolder64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#18181b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#18181B</p>
    </div>
  );
}

function SwatchHolder65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#09090b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#09090B</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Zinc</p>
      </div>
      <SwatchHolder55 />
      <SwatchHolder56 />
      <SwatchHolder57 />
      <SwatchHolder58 />
      <SwatchHolder59 />
      <SwatchHolder60 />
      <SwatchHolder61 />
      <SwatchHolder62 />
      <SwatchHolder63 />
      <SwatchHolder64 />
      <SwatchHolder65 />
    </div>
  );
}

function SwatchHolder66() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fafaf9] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FAFAF9</p>
    </div>
  );
}

function SwatchHolder67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f5f5f4] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F5F5F4</p>
    </div>
  );
}

function SwatchHolder68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e7e5e4] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E7E5E4</p>
    </div>
  );
}

function SwatchHolder69() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d6d3d1] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D6D3D1</p>
    </div>
  );
}

function SwatchHolder70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a8a29e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A8A29E</p>
    </div>
  );
}

function SwatchHolder71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#78716c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#78716C</p>
    </div>
  );
}

function SwatchHolder72() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#57534e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#57534E</p>
    </div>
  );
}

function SwatchHolder73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#44403c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#44403C</p>
    </div>
  );
}

function SwatchHolder74() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#292524] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#292524</p>
    </div>
  );
}

function SwatchHolder75() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#1c1917] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#1C1917</p>
    </div>
  );
}

function SwatchHolder76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0c0a09] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0C0A09</p>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Stone</p>
      </div>
      <SwatchHolder66 />
      <SwatchHolder67 />
      <SwatchHolder68 />
      <SwatchHolder69 />
      <SwatchHolder70 />
      <SwatchHolder71 />
      <SwatchHolder72 />
      <SwatchHolder73 />
      <SwatchHolder74 />
      <SwatchHolder75 />
      <SwatchHolder76 />
    </div>
  );
}

function SwatchHolder77() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fbfaf9] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FBFAF9</p>
    </div>
  );
}

function SwatchHolder78() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f3f1f1] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F3F1F1</p>
    </div>
  );
}

function SwatchHolder79() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e8e4e3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E8E4E3</p>
    </div>
  );
}

function SwatchHolder80() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d8d2d0] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D8D2D0</p>
    </div>
  );
}

function SwatchHolder81() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#aba09c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#ABA09C</p>
    </div>
  );
}

function SwatchHolder82() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#7c6d67] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#7C6D67</p>
    </div>
  );
}

function SwatchHolder83() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#5b4f4b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#5B4F4B</p>
    </div>
  );
}

function SwatchHolder84() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#473c39] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#473C39</p>
    </div>
  );
}

function SwatchHolder85() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#2b2422] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#2B2422</p>
    </div>
  );
}

function SwatchHolder86() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#1d1816] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#1D1816</p>
    </div>
  );
}

function SwatchHolder87() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0c0a09] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0C0A09</p>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[160px]" data-name="Column">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[24px] leading-[20px] relative shrink-0 text-[14px] text-black w-[160px]">Taupe</p>
      <SwatchHolder77 />
      <SwatchHolder78 />
      <SwatchHolder79 />
      <SwatchHolder80 />
      <SwatchHolder81 />
      <SwatchHolder82 />
      <SwatchHolder83 />
      <SwatchHolder84 />
      <SwatchHolder85 />
      <SwatchHolder86 />
      <SwatchHolder87 />
    </div>
  );
}

function SwatchHolder88() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fafafa] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FAFAFA</p>
    </div>
  );
}

function SwatchHolder89() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f3f1f3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F3F1F3</p>
    </div>
  );
}

function SwatchHolder90() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e7e4e7] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E7E4E7</p>
    </div>
  );
}

function SwatchHolder91() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d7d0d7] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D7D0D7</p>
    </div>
  );
}

function SwatchHolder92() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a89ea9] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A89EA9</p>
    </div>
  );
}

function SwatchHolder93() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#79697b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#79697B</p>
    </div>
  );
}

function SwatchHolder94() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#594c5b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#594C5B</p>
    </div>
  );
}

function SwatchHolder95() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#463947] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#463947</p>
    </div>
  );
}

function SwatchHolder96() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#2a212c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#2A212C</p>
    </div>
  );
}

function SwatchHolder97() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#1d161e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#1D161E</p>
    </div>
  );
}

function SwatchHolder98() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0c090c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0C090C</p>
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[160px]" data-name="Column">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[24px] leading-[20px] relative shrink-0 text-[14px] text-black w-[160px]">Mauve</p>
      <SwatchHolder88 />
      <SwatchHolder89 />
      <SwatchHolder90 />
      <SwatchHolder91 />
      <SwatchHolder92 />
      <SwatchHolder93 />
      <SwatchHolder94 />
      <SwatchHolder95 />
      <SwatchHolder96 />
      <SwatchHolder97 />
      <SwatchHolder98 />
    </div>
  );
}

function SwatchHolder99() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f9fbfb] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F9FBFB</p>
    </div>
  );
}

function SwatchHolder100() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f1f3f3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F1F3F3</p>
    </div>
  );
}

function SwatchHolder101() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e3e7e8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E3E7E8</p>
    </div>
  );
}

function SwatchHolder102() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d0d6d8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D0D6D8</p>
    </div>
  );
}

function SwatchHolder103() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#9ca8ab] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#9CA8AB</p>
    </div>
  );
}

function SwatchHolder104() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#67787c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#67787C</p>
    </div>
  );
}

function SwatchHolder105() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#4b585b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#4B585B</p>
    </div>
  );
}

function SwatchHolder106() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#394447] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#394447</p>
    </div>
  );
}

function SwatchHolder107() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#22292b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#22292B</p>
    </div>
  );
}

function SwatchHolder108() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#161b1d] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#161B1D</p>
    </div>
  );
}

function SwatchHolder109() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#090b0c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#090B0C</p>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[160px]" data-name="Column">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[24px] leading-[20px] relative shrink-0 text-[14px] text-black w-[160px]">Mist</p>
      <SwatchHolder99 />
      <SwatchHolder100 />
      <SwatchHolder101 />
      <SwatchHolder102 />
      <SwatchHolder103 />
      <SwatchHolder104 />
      <SwatchHolder105 />
      <SwatchHolder106 />
      <SwatchHolder107 />
      <SwatchHolder108 />
      <SwatchHolder109 />
    </div>
  );
}

function SwatchHolder110() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fbfbf9] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FBFBF9</p>
    </div>
  );
}

function SwatchHolder111() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f4f4f0] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F4F4F0</p>
    </div>
  );
}

function SwatchHolder112() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e8e8e3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E8E8E3</p>
    </div>
  );
}

function SwatchHolder113() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d8d8d0] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D8D8D0</p>
    </div>
  );
}

function SwatchHolder114() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#abab9c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#ABAB9C</p>
    </div>
  );
}

function SwatchHolder115() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#7c7c67] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#7C7C67</p>
    </div>
  );
}

function SwatchHolder116() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#5b5b4b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#5B5B4B</p>
    </div>
  );
}

function SwatchHolder117() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#474739] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#474739</p>
    </div>
  );
}

function SwatchHolder118() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#2b2b22] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#2B2B22</p>
    </div>
  );
}

function SwatchHolder119() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#1d1d16] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#1D1D16</p>
    </div>
  );
}

function SwatchHolder120() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0c0c09] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0C0C09</p>
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[160px]" data-name="Column">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[24px] leading-[20px] relative shrink-0 text-[14px] text-black w-[160px]">Olive</p>
      <SwatchHolder110 />
      <SwatchHolder111 />
      <SwatchHolder112 />
      <SwatchHolder113 />
      <SwatchHolder114 />
      <SwatchHolder115 />
      <SwatchHolder116 />
      <SwatchHolder117 />
      <SwatchHolder118 />
      <SwatchHolder119 />
      <SwatchHolder120 />
    </div>
  );
}

function SwatchHolder121() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f0f9ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F0F9FF</p>
    </div>
  );
}

function SwatchHolder122() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e0f2fe] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E0F2FE</p>
    </div>
  );
}

function SwatchHolder123() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#bae6fd] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#BAE6FD</p>
    </div>
  );
}

function SwatchHolder124() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#7dd3fc] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#7DD3FC</p>
    </div>
  );
}

function SwatchHolder125() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#38bdf8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#38BDF8</p>
    </div>
  );
}

function SwatchHolder126() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#0ea5e9] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0EA5E9</p>
    </div>
  );
}

function SwatchHolder127() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0284c7] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0284C7</p>
    </div>
  );
}

function SwatchHolder128() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0369a1] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0369A1</p>
    </div>
  );
}

function SwatchHolder129() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#075985] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#075985</p>
    </div>
  );
}

function SwatchHolder130() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0c4a6e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0C4A6E</p>
    </div>
  );
}

function SwatchHolder131() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#082f49] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#082F49</p>
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Sky</p>
      </div>
      <SwatchHolder121 />
      <SwatchHolder122 />
      <SwatchHolder123 />
      <SwatchHolder124 />
      <SwatchHolder125 />
      <SwatchHolder126 />
      <SwatchHolder127 />
      <SwatchHolder128 />
      <SwatchHolder129 />
      <SwatchHolder130 />
      <SwatchHolder131 />
    </div>
  );
}

function SwatchHolder132() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fff7ed] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FFF7ED</p>
    </div>
  );
}

function SwatchHolder133() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ffedd5] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FFEDD5</p>
    </div>
  );
}

function SwatchHolder134() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fed7aa] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FED7AA</p>
    </div>
  );
}

function SwatchHolder135() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fdba74] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FDBA74</p>
    </div>
  );
}

function SwatchHolder136() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fb923c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FB923C</p>
    </div>
  );
}

function SwatchHolder137() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#f97316] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F97316</p>
    </div>
  );
}

function SwatchHolder138() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ea580c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#EA580C</p>
    </div>
  );
}

function SwatchHolder139() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#c2410c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#C2410C</p>
    </div>
  );
}

function SwatchHolder140() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#9a3412] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#9A3412</p>
    </div>
  );
}

function SwatchHolder141() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#7c2d12] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#7C2D12</p>
    </div>
  );
}

function SwatchHolder142() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#431407] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#431407</p>
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Orange</p>
      </div>
      <SwatchHolder132 />
      <SwatchHolder133 />
      <SwatchHolder134 />
      <SwatchHolder135 />
      <SwatchHolder136 />
      <SwatchHolder137 />
      <SwatchHolder138 />
      <SwatchHolder139 />
      <SwatchHolder140 />
      <SwatchHolder141 />
      <SwatchHolder142 />
    </div>
  );
}

function SwatchHolder143() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f7fee7] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F7FEE7</p>
    </div>
  );
}

function SwatchHolder144() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ecfccb] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#ECFCCB</p>
    </div>
  );
}

function SwatchHolder145() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d9f99d] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D9F99D</p>
    </div>
  );
}

function SwatchHolder146() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#bef264] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#BEF264</p>
    </div>
  );
}

function SwatchHolder147() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a3e635] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A3E635</p>
    </div>
  );
}

function SwatchHolder148() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#84cc16] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#84CC16</p>
    </div>
  );
}

function SwatchHolder149() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#65a30d] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#65A30D</p>
    </div>
  );
}

function SwatchHolder150() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#4d7c0f] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#4D7C0F</p>
    </div>
  );
}

function SwatchHolder151() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#3f6212] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#3F6212</p>
    </div>
  );
}

function SwatchHolder152() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#365314] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#365314</p>
    </div>
  );
}

function SwatchHolder153() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#1a2e05] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#1A2E05</p>
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Lime</p>
      </div>
      <SwatchHolder143 />
      <SwatchHolder144 />
      <SwatchHolder145 />
      <SwatchHolder146 />
      <SwatchHolder147 />
      <SwatchHolder148 />
      <SwatchHolder149 />
      <SwatchHolder150 />
      <SwatchHolder151 />
      <SwatchHolder152 />
      <SwatchHolder153 />
    </div>
  );
}

function SwatchHolder154() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fefce8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FEFCE8</p>
    </div>
  );
}

function SwatchHolder155() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fef9c3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FEF9C3</p>
    </div>
  );
}

function SwatchHolder156() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fef08a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FEF08A</p>
    </div>
  );
}

function SwatchHolder157() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fde047] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FDE047</p>
    </div>
  );
}

function SwatchHolder158() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#facc15] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FACC15</p>
    </div>
  );
}

function SwatchHolder159() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#eab308] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#EAB308</p>
    </div>
  );
}

function SwatchHolder160() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ca8a04] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#CA8A04</p>
    </div>
  );
}

function SwatchHolder161() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a16207] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A16207</p>
    </div>
  );
}

function SwatchHolder162() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#854d0e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#854D0E</p>
    </div>
  );
}

function SwatchHolder163() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#713f12] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#713F12</p>
    </div>
  );
}

function SwatchHolder164() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#422006] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#422006</p>
    </div>
  );
}

function Column14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Yellow</p>
      </div>
      <SwatchHolder154 />
      <SwatchHolder155 />
      <SwatchHolder156 />
      <SwatchHolder157 />
      <SwatchHolder158 />
      <SwatchHolder159 />
      <SwatchHolder160 />
      <SwatchHolder161 />
      <SwatchHolder162 />
      <SwatchHolder163 />
      <SwatchHolder164 />
    </div>
  );
}

function SwatchHolder165() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#eef2ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#EEF2FF</p>
    </div>
  );
}

function SwatchHolder166() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e0e7ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E0E7FF</p>
    </div>
  );
}

function SwatchHolder167() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#c7d2fe] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#C7D2FE</p>
    </div>
  );
}

function SwatchHolder168() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a5b4fc] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A5B4FC</p>
    </div>
  );
}

function SwatchHolder169() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#818cf8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#818CF8</p>
    </div>
  );
}

function SwatchHolder170() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#6366f1] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#6366F1</p>
    </div>
  );
}

function SwatchHolder171() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#4f46e5] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#4F46E5</p>
    </div>
  );
}

function SwatchHolder172() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#4338ca] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#4338CA</p>
    </div>
  );
}

function SwatchHolder173() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#3730a3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#3730A3</p>
    </div>
  );
}

function SwatchHolder174() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#312e81] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#312E81</p>
    </div>
  );
}

function SwatchHolder175() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#1e1b4b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#1E1B4B</p>
    </div>
  );
}

function Column15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Indigo</p>
      </div>
      <SwatchHolder165 />
      <SwatchHolder166 />
      <SwatchHolder167 />
      <SwatchHolder168 />
      <SwatchHolder169 />
      <SwatchHolder170 />
      <SwatchHolder171 />
      <SwatchHolder172 />
      <SwatchHolder173 />
      <SwatchHolder174 />
      <SwatchHolder175 />
    </div>
  );
}

function SwatchHolder176() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fffbeb] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FFFBEB</p>
    </div>
  );
}

function SwatchHolder177() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fef3c7] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FEF3C7</p>
    </div>
  );
}

function SwatchHolder178() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fde68a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FDE68A</p>
    </div>
  );
}

function SwatchHolder179() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fcd34d] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FCD34D</p>
    </div>
  );
}

function SwatchHolder180() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fbbf24] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FBBF24</p>
    </div>
  );
}

function SwatchHolder181() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#f59e0b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F59E0B</p>
    </div>
  );
}

function SwatchHolder182() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d97706] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D97706</p>
    </div>
  );
}

function SwatchHolder183() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#b45309] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#B45309</p>
    </div>
  );
}

function SwatchHolder184() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#92400e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#92400E</p>
    </div>
  );
}

function SwatchHolder185() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#78350f] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#78350F</p>
    </div>
  );
}

function SwatchHolder186() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#451a03] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#451A03</p>
    </div>
  );
}

function Column16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Amber</p>
      </div>
      <SwatchHolder176 />
      <SwatchHolder177 />
      <SwatchHolder178 />
      <SwatchHolder179 />
      <SwatchHolder180 />
      <SwatchHolder181 />
      <SwatchHolder182 />
      <SwatchHolder183 />
      <SwatchHolder184 />
      <SwatchHolder185 />
      <SwatchHolder186 />
    </div>
  );
}

function SwatchHolder187() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ecfdf5] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#ECFDF5</p>
    </div>
  );
}

function SwatchHolder188() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d1fae5] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D1FAE5</p>
    </div>
  );
}

function SwatchHolder189() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a7f3d0] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A7F3D0</p>
    </div>
  );
}

function SwatchHolder190() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#6ee7b7] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#6EE7B7</p>
    </div>
  );
}

function SwatchHolder191() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#34d399] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#34D399</p>
    </div>
  );
}

function SwatchHolder192() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#10b981] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#10B981</p>
    </div>
  );
}

function SwatchHolder193() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#059669] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#059669</p>
    </div>
  );
}

function SwatchHolder194() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#047857] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#047857</p>
    </div>
  );
}

function SwatchHolder195() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#065f46] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#065F46</p>
    </div>
  );
}

function SwatchHolder196() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#064e3b] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#064E3B</p>
    </div>
  );
}

function SwatchHolder197() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#022c22] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#022C22</p>
    </div>
  );
}

function Column17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Emerald</p>
      </div>
      <SwatchHolder187 />
      <SwatchHolder188 />
      <SwatchHolder189 />
      <SwatchHolder190 />
      <SwatchHolder191 />
      <SwatchHolder192 />
      <SwatchHolder193 />
      <SwatchHolder194 />
      <SwatchHolder195 />
      <SwatchHolder196 />
      <SwatchHolder197 />
    </div>
  );
}

function SwatchHolder198() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f0fdfa] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F0FDFA</p>
    </div>
  );
}

function SwatchHolder199() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ccfbf1] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#CCFBF1</p>
    </div>
  );
}

function SwatchHolder200() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#99f6e4] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#99F6E4</p>
    </div>
  );
}

function SwatchHolder201() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#5eead4] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#5EEAD4</p>
    </div>
  );
}

function SwatchHolder202() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#2dd4bf] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#2DD4BF</p>
    </div>
  );
}

function SwatchHolder203() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#14b8a6] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#14B8A6</p>
    </div>
  );
}

function SwatchHolder204() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0d9488] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0D9488</p>
    </div>
  );
}

function SwatchHolder205() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0f766e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0F766E</p>
    </div>
  );
}

function SwatchHolder206() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#115e59] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#115E59</p>
    </div>
  );
}

function SwatchHolder207() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#134e4a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#134E4A</p>
    </div>
  );
}

function SwatchHolder208() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#042f2e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#042F2E</p>
    </div>
  );
}

function Column18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Teal</p>
      </div>
      <SwatchHolder198 />
      <SwatchHolder199 />
      <SwatchHolder200 />
      <SwatchHolder201 />
      <SwatchHolder202 />
      <SwatchHolder203 />
      <SwatchHolder204 />
      <SwatchHolder205 />
      <SwatchHolder206 />
      <SwatchHolder207 />
      <SwatchHolder208 />
    </div>
  );
}

function SwatchHolder209() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ecfeff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#ECFEFF</p>
    </div>
  );
}

function SwatchHolder210() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#cffafe] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#CFFAFE</p>
    </div>
  );
}

function SwatchHolder211() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a5f3fc] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A5F3FC</p>
    </div>
  );
}

function SwatchHolder212() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#67e8f9] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#67E8F9</p>
    </div>
  );
}

function SwatchHolder213() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#22d3ee] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#22D3EE</p>
    </div>
  );
}

function SwatchHolder214() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#06b6d4] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#06B6D4</p>
    </div>
  );
}

function SwatchHolder215() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0891b2] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0891B2</p>
    </div>
  );
}

function SwatchHolder216() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#0e7490] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#0E7490</p>
    </div>
  );
}

function SwatchHolder217() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#155e75] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#155E75</p>
    </div>
  );
}

function SwatchHolder218() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#164e63] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#164E63</p>
    </div>
  );
}

function SwatchHolder219() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#083344] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#083344</p>
    </div>
  );
}

function Column19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Cyan</p>
      </div>
      <SwatchHolder209 />
      <SwatchHolder210 />
      <SwatchHolder211 />
      <SwatchHolder212 />
      <SwatchHolder213 />
      <SwatchHolder214 />
      <SwatchHolder215 />
      <SwatchHolder216 />
      <SwatchHolder217 />
      <SwatchHolder218 />
      <SwatchHolder219 />
    </div>
  );
}

function SwatchHolder220() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f5f3ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F5F3FF</p>
    </div>
  );
}

function SwatchHolder221() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ede9fe] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#EDE9FE</p>
    </div>
  );
}

function SwatchHolder222() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ddd6fe] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#DDD6FE</p>
    </div>
  );
}

function SwatchHolder223() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#c4b5fd] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#C4B5FD</p>
    </div>
  );
}

function SwatchHolder224() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a78bfa] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A78BFA</p>
    </div>
  );
}

function SwatchHolder225() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#8b5cf6] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#8B5CF6</p>
    </div>
  );
}

function SwatchHolder226() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#7c3aed] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#7C3AED</p>
    </div>
  );
}

function SwatchHolder227() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#6d28d9] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#6D28D9</p>
    </div>
  );
}

function SwatchHolder228() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#5b21b6] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#5B21B6</p>
    </div>
  );
}

function SwatchHolder229() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#4c1d95] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#4C1D95</p>
    </div>
  );
}

function SwatchHolder230() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#2e1065] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#2E1065</p>
    </div>
  );
}

function Column20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Violet</p>
      </div>
      <SwatchHolder220 />
      <SwatchHolder221 />
      <SwatchHolder222 />
      <SwatchHolder223 />
      <SwatchHolder224 />
      <SwatchHolder225 />
      <SwatchHolder226 />
      <SwatchHolder227 />
      <SwatchHolder228 />
      <SwatchHolder229 />
      <SwatchHolder230 />
    </div>
  );
}

function SwatchHolder231() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#faf5ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FAF5FF</p>
    </div>
  );
}

function SwatchHolder232() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f3e8ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F3E8FF</p>
    </div>
  );
}

function SwatchHolder233() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e9d5ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E9D5FF</p>
    </div>
  );
}

function SwatchHolder234() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#d8b4fe] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D8B4FE</p>
    </div>
  );
}

function SwatchHolder235() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#c084fc] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#C084FC</p>
    </div>
  );
}

function SwatchHolder236() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#a855f7] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A855F7</p>
    </div>
  );
}

function SwatchHolder237() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#9333ea] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#9333EA</p>
    </div>
  );
}

function SwatchHolder238() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#7e22ce] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#7E22CE</p>
    </div>
  );
}

function SwatchHolder239() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#6b21a8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#6B21A8</p>
    </div>
  );
}

function SwatchHolder240() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#581c87] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#581C87</p>
    </div>
  );
}

function SwatchHolder241() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#3b0764] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#3B0764</p>
    </div>
  );
}

function Column21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Purple</p>
      </div>
      <SwatchHolder231 />
      <SwatchHolder232 />
      <SwatchHolder233 />
      <SwatchHolder234 />
      <SwatchHolder235 />
      <SwatchHolder236 />
      <SwatchHolder237 />
      <SwatchHolder238 />
      <SwatchHolder239 />
      <SwatchHolder240 />
      <SwatchHolder241 />
    </div>
  );
}

function SwatchHolder242() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fdf4ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FDF4FF</p>
    </div>
  );
}

function SwatchHolder243() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fae8ff] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FAE8FF</p>
    </div>
  );
}

function SwatchHolder244() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f5d0fe] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F5D0FE</p>
    </div>
  );
}

function SwatchHolder245() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f0abfc] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F0ABFC</p>
    </div>
  );
}

function SwatchHolder246() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e879f9] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E879F9</p>
    </div>
  );
}

function SwatchHolder247() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#d946ef] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#D946EF</p>
    </div>
  );
}

function SwatchHolder248() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#c026d3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#C026D3</p>
    </div>
  );
}

function SwatchHolder249() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#a21caf] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#A21CAF</p>
    </div>
  );
}

function SwatchHolder250() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#86198f] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#86198F</p>
    </div>
  );
}

function SwatchHolder251() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#701a75] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#701A75</p>
    </div>
  );
}

function SwatchHolder252() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#4a044e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#4A044E</p>
    </div>
  );
}

function Column22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Fuchsia</p>
      </div>
      <SwatchHolder242 />
      <SwatchHolder243 />
      <SwatchHolder244 />
      <SwatchHolder245 />
      <SwatchHolder246 />
      <SwatchHolder247 />
      <SwatchHolder248 />
      <SwatchHolder249 />
      <SwatchHolder250 />
      <SwatchHolder251 />
      <SwatchHolder252 />
    </div>
  );
}

function SwatchHolder253() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fdf2f8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FDF2F8</p>
    </div>
  );
}

function SwatchHolder254() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fce7f3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FCE7F3</p>
    </div>
  );
}

function SwatchHolder255() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fbcfe8] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FBCFE8</p>
    </div>
  );
}

function SwatchHolder256() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f9a8d4] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F9A8D4</p>
    </div>
  );
}

function SwatchHolder257() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f472b6] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F472B6</p>
    </div>
  );
}

function SwatchHolder258() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#ec4899] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#EC4899</p>
    </div>
  );
}

function SwatchHolder259() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#db2777] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#DB2777</p>
    </div>
  );
}

function SwatchHolder260() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#be185d] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#BE185D</p>
    </div>
  );
}

function SwatchHolder261() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#9d174d] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#9D174D</p>
    </div>
  );
}

function SwatchHolder262() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#831843] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#831843</p>
    </div>
  );
}

function SwatchHolder263() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#500724] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#500724</p>
    </div>
  );
}

function Column23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Pink</p>
      </div>
      <SwatchHolder253 />
      <SwatchHolder254 />
      <SwatchHolder255 />
      <SwatchHolder256 />
      <SwatchHolder257 />
      <SwatchHolder258 />
      <SwatchHolder259 />
      <SwatchHolder260 />
      <SwatchHolder261 />
      <SwatchHolder262 />
      <SwatchHolder263 />
    </div>
  );
}

function SwatchHolder264() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fff1f2] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FFF1F2</p>
    </div>
  );
}

function SwatchHolder265() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#ffe4e6] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FFE4E6</p>
    </div>
  );
}

function SwatchHolder266() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fecdd3] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FECDD3</p>
    </div>
  );
}

function SwatchHolder267() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fda4af] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FDA4AF</p>
    </div>
  );
}

function SwatchHolder268() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#fb7185] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#FB7185</p>
    </div>
  );
}

function SwatchHolder269() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#f43f5e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F43F5E</p>
    </div>
  );
}

function SwatchHolder270() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#e11d48] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#E11D48</p>
    </div>
  );
}

function SwatchHolder271() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#be123c] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#BE123C</p>
    </div>
  );
}

function SwatchHolder272() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#9f1239] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#9F1239</p>
    </div>
  );
}

function SwatchHolder273() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#881337] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#881337</p>
    </div>
  );
}

function SwatchHolder274() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#4c0519] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#4C0519</p>
    </div>
  );
}

function Column24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Rose</p>
      </div>
      <SwatchHolder264 />
      <SwatchHolder265 />
      <SwatchHolder266 />
      <SwatchHolder267 />
      <SwatchHolder268 />
      <SwatchHolder269 />
      <SwatchHolder270 />
      <SwatchHolder271 />
      <SwatchHolder272 />
      <SwatchHolder273 />
      <SwatchHolder274 />
    </div>
  );
}

function SwatchHolder275() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#f0fdf4] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#F0FDF4</p>
    </div>
  );
}

function SwatchHolder276() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#dcfce7] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#DCFCE7</p>
    </div>
  );
}

function SwatchHolder277() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#bbf7d0] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#BBF7D0</p>
    </div>
  );
}

function SwatchHolder278() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#86efac] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#86EFAC</p>
    </div>
  );
}

function SwatchHolder279() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#4ade80] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#4ADE80</p>
    </div>
  );
}

function SwatchHolder280() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Swatch holder">
      <div className="bg-[#22c55e] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#22C55E</p>
    </div>
  );
}

function SwatchHolder281() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#16a34a] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#16A34A</p>
    </div>
  );
}

function SwatchHolder282() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#15803d] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#15803D</p>
    </div>
  );
}

function SwatchHolder283() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#166534] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#166534</p>
    </div>
  );
}

function SwatchHolder284() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#14532d] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#14532D</p>
    </div>
  );
}

function SwatchHolder285() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Swatch holder">
      <div className="bg-[#052e16] relative rounded-[6px] shrink-0 size-[64px]" data-name="Swatch" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">#052E16</p>
    </div>
  );
}

function Column25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[160px] relative shrink-0 w-[160px]" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Semibold',sans-serif] h-[24px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[20px]">Green</p>
      </div>
      <SwatchHolder275 />
      <SwatchHolder276 />
      <SwatchHolder277 />
      <SwatchHolder278 />
      <SwatchHolder279 />
      <SwatchHolder280 />
      <SwatchHolder281 />
      <SwatchHolder282 />
      <SwatchHolder283 />
      <SwatchHolder284 />
      <SwatchHolder285 />
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Rows">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
      <Column6 />
      <Column7 />
      <Column8 />
      <Column9 />
      <Column10 />
      <Column11 />
      <Column12 />
      <Column13 />
      <Column14 />
      <Column15 />
      <Column16 />
      <Column17 />
      <Column18 />
      <Column19 />
      <Column20 />
      <Column21 />
      <Column22 />
      <Column23 />
      <Column24 />
      <Column25 />
    </div>
  );
}

function Al() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="AL">
      <Rows />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0" data-name="Content">
      <Values />
      <Al />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[64px] items-start p-[64px] relative shrink-0" data-name="Content">
      <Text2 />
      <Content1 />
    </div>
  );
}

export default function Colors() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Colors">
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
      <Content />
    </div>
  );
}