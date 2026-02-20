import Title1 from "../Title01";
import Title2 from "../Title2";
import Grop8 from "./Group8";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import Frame4 from "./Frame4";
import Frame5 from "./Frame5";
import Frame6 from "./Frame6";

export default function Frame() {
  return (
    <section className="ts-results" aria-label="Results">
      <div className="ts-resultsInner">
         <header className="ts-resultsHead">
          <Title1 />
          <Title2 />
        </header>

        <div className="ts-collageWrap">
          <Grop8>
            <Frame1 />
            <Frame2 />
            <Frame3 />
            <Frame4 />
            <Frame5 />
            <Frame6 />
          </Grop8>

          <div className="ts-resultsBadge" aria-label="Before and after results">
            <span className="ts-badgeTop">Before &amp;</span>
            <span className="ts-badgeBottom">After Results</span>
          </div>
        </div>
      </div>
    </section>
  );
}