import React, { memo } from 'react';

import { useParameter } from '@storybook/api';
import { Icons, IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';


export const Brands = memo(() => {
  const params = useParameter('brand', null) || {};

  function getBrandLinks(links) {
    if (!links?.brands) return [];

    return Object.keys(links.brands).map(brand => {
      const b = links.brands[brand];
      return {
        id: b.id,
        title: b.name,
        onClick: () => {
          setBrand(b.name);
        },
        right: b.icon ? <img src={b.icon} width="25" height="25" /> : null,
      };
    });
  }

  return (
    <>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={() => {
          return (
            <TooltipLinkList
              links={getBrandLinks(params)}
            />
          );
        }}
      >
        <IconButton
          key="brand"
          title="Change the brand theme of the preview"
          active={true}
        >
          <svg class="sto-130cftl" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="80px" width="80px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
            <g>
              <g>
                <path d="M475.691,0.021c-14.656,0-27.776,8.725-33.451,22.251l-32.64,77.973c-9.728-9.152-22.421-14.933-36.267-14.933h-320    C23.936,85.312,0,109.248,0,138.645v320c0,29.397,23.936,53.333,53.333,53.333h320c29.397,0,53.333-23.936,53.333-53.333V225.152    l81.92-172.821c2.24-4.757,3.413-10.048,3.413-16.043C512,16.299,495.701,0.021,475.691,0.021z M405.333,458.645    c0,17.643-14.357,32-32,32h-320c-17.643,0-32-14.357-32-32v-320c0-17.643,14.357-32,32-32h320    c11.243,0,21.312,6.101,27.072,15.573l-37.739,90.197v-52.437c0-5.888-4.779-10.667-10.667-10.667H74.667    c-5.888,0-10.667,4.779-10.667,10.667v85.333c0,5.888,4.779,10.667,10.667,10.667h269.76l-8.939,21.333h-90.155    c-5.888,0-10.667,4.779-10.667,10.667v128c0,0.277,0.128,0.512,0.149,0.789c-8.768,7.787-14.144,10.389-14.528,10.539    c-3.371,1.259-5.888,4.096-6.699,7.616c-0.811,3.584,0.256,7.339,2.859,9.941c15.445,15.445,36.757,21.333,57.6,21.333    c26.645,0,52.48-9.643,64.128-21.333c16.768-16.768,29.056-50.005,19.776-74.773l47.381-99.925V458.645z M270.635,397.525    c2.944-9.685,5.739-18.859,14.229-27.349c15.083-15.083,33.835-15.083,48.917,0c13.504,13.504,3.2,45.717-10.667,59.584    c-11.563,11.541-52.672,22.677-80.256,8.256c3.669-2.859,7.893-6.549,12.672-11.328    C264.448,417.749,267.605,407.467,270.635,397.525z M256,375.339v-76.672h70.571l-16.363,39.083    c-14.251-0.256-28.565,5.483-40.448,17.387C263.125,361.771,259.008,368.661,256,375.339z M331.264,342.741l28.715-68.629    l16.128,7.915l-32.555,68.651C339.605,347.477,335.531,344.747,331.264,342.741z M341.333,170.645v64h-256v-64H341.333z     M489.28,43.243l-104.064,219.52l-17.003-8.341l54.08-129.237l39.616-94.677c2.325-5.568,7.744-9.152,13.803-9.152    c8.235,0,14.933,6.699,14.933,15.659C490.645,39.147,490.176,41.344,489.28,43.243z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M181.333,277.312H74.667c-5.888,0-10.667,4.779-10.667,10.667v149.333c0,5.888,4.779,10.667,10.667,10.667h106.667    c5.888,0,10.667-4.779,10.667-10.667V287.979C192,282.091,187.221,277.312,181.333,277.312z M170.667,426.645H85.333v-128h85.333    V426.645z"/>
              </g>
            </g>
          </svg>
        </IconButton>
      </WithTooltip>
    </>
  );
});

function setBrand(brand) {
  const iframe = document.querySelector('#storybook-preview-iframe').contentDocument;
  iframe.head.querySelector('#brand-theme').href = `./dist/${brand}/theme.css`;
}