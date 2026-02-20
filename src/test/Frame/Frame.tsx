

import Group8 from "./Group8";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import Frame4 from "./Frame4";
import Frame5 from "./Frame5";
import Frame6 from "./Frame6";

export default function Frame() {
  return (
    <section className="ts-results" aria-label="Results">
      <div className="ts-resultsBody">
        <Group8>
          <Frame1 />
          <Frame2 />
          <Frame3 />
          <Frame4 />
          <Frame5 />
          <Frame6 />
        </Group8>

        {/* optional */}
        <div className="ts-badge">Before &amp; After Results</div>
      </div>
    </section>
  );
}
