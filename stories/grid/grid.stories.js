export default {
  title: 'Synergy Design System/Grid',
};

export const TwelveColumns = {
  args: {
    columns: 12,
  },
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-1">
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
    return /* html */`<div class="story grid-demo-2">
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
    return /* html */`<div class="story grid-demo-3">
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
    return /* html */`<div class="story grid-demo-4">
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

export const ResponsiveColumns = {
  render: ({ label, ...args }) => {
    return /* html */`<div class="story grid-demo-5">
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
