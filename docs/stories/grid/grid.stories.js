export default {
  title: 'Synergy Design System/Atoms/Grid',
};

export const Demo = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo">
      <div>
        <div class="nav">Nav</div>
        <div class="heading">Heading</div>
        <div class="content">Content</div>
        <div class="content">Content</div>
        <div class="content">Content</div>
        <div class="sidebar">Sidebar</div>
      </div>
    </div>
    `;
  }
};

export const TwelveColumns = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-12-column">
      <div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
      </div>
    </div>
    `;
  }
};


export const TwoColumns = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-2-column">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `;
  }
};

export const SpanColumns = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-span-columns">
      <div>
          <div>col (span 3)</div>
          <div>col (span 9)</div>
          <div>col (span 3)</div>
          <div>col (span 9)</div>
      </div>
    </div>
    `;
  }
};

export const SpanRows = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-span-rows">
      <div>
        <div>col (row 3)</div>
        <div>col (span 9)</div>
        <div>col (span 9)</div>
        <div>col (span 9)</div>
      </div>
    </div>
    `;
  }
};

export const Gap = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-gap">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `;
  }
};

export const GapX = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-gap-x">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `;
  }
};


export const GapY = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-gap-y">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `;
  }
};

export const ResponsiveColumns = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-responsive">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `;
  }
};
