import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const avg = (data) => {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={props.height} width={props.width} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{avg(props.data)}</div>
    </div>
  );
}