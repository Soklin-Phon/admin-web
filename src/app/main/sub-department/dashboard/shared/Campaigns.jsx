import React from "react";

import { SimpleCard, MatxProgressBar } from "matx";

const Campaigns = () => {
  return (
    <div  className="p-sm-24 mb-6">
      <SimpleCard title="Campaigns">
        <small className="text-muted">Today</small>
        <div className="pt-2" />
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <div className="py-1" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <div className="py-1" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />

        <div className="py-3" />
        <small className="text-muted">Yesterday</small>
        <div className="pt-2" />
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <div className="py-1" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <div className="py-1" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />

        <div className="py-3" />
        <small className="text-muted">Yesterday</small>
        <div className="pt-2" />
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <div className="py-1" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <div className="py-1" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />
      </SimpleCard>
    </div>
  );
};

export default Campaigns;
