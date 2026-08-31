import "../Style/Ourclients.css";

const clients = [
  { name: "paypal", logo: "/paypal.png" },
  { name: "spoty", logo: "/spoty.png" },
  { name: "shopboat", logo: "/shopboat.png" },
  { name: "slack", logo: "/slack.png" },
  { name: "envato", logo: "/envato.png" },
  { name: "jquery", logo: "/jquery.png" },
  { name: "woocommerce", logo: "/woocommerce.png" },
  { name: "themeforest", logo: "/themeforest.png" },
];

function Ourclients() {
  return (
    <section className="row_am our_client">
      <div className="container">
        <div className="section_title">
          <span className="title_badge">Our clients</span>
          <h2>
            <span className="d-block">3500+ companies</span>
            using our applicaion
          </h2>
        </div>

        {/* Our Client List */}
        <ul className="client_list">
          {clients.map((client, index) => (
            <li key={index}>
              <div
                className="client_logo"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay={index * 100}
              >
                <img src={client.logo} alt={client.name} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Ourclients;