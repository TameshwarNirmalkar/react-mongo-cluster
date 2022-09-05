import { memo } from "react";

export const ClientLogo = memo(() => {
  return (
    <section className="client-logo-area">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src="assets/images/client_logo_01.png" alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src="assets/images/client_logo_02.png" alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src="assets/images/client_logo_03.png" alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src="assets/images/client_logo_04.png" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
