import React from "react";

import styles from "./contact.module.css";
import { IoMailOpenOutline, IoCallOutline } from "react-icons/io5";
import { useMedia } from "../../helper/usemedia";

const Contact = () => {
  const isMobile = useMedia(991);
  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <h2>Contatti</h2>
        <div className={styles.underline} />
      </div>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <IoMailOpenOutline color="#fff" />
            </div>
            <div className={styles.text}>
              <h3>Lascia un messaggio</h3>
              <p>
                Se hai domande, chiedi pure, <br />
                ti risponderemo immediatamente, <br />
                anche se pensiamo che sia sempre meglio <br />
                sedersi con calma e prendere un caffè insieme.
              </p>
            </div>
          </div>
          {!isMobile && (
            <div className={styles.calling_block}>
              <div className={styles.urgent_txt_block}>
                <div className={styles.callIcon}>
                  <IoCallOutline color="#fff" />
                </div>

                <div>
                  <h2 className={styles.urgent_txt}>
                    Hai un problema urgente che possiamo aiutarti a risolvere?
                    Ci colleghiamo in remoto entro 24 ore!
                  </h2>
                  <div className={styles.underline} />
                </div>
              </div>

              <ol className={styles.sci}>
                <li>
                  Team Viewer
                  <a
                    href="https://www.teamviewer.com/it/?utm_source=bing&utm_medium=cpc&utm_campaign=it%7Cb%7Cpr%7C21%7Csep%7Cexact-brand-only-sn%7Cfree%7Ct0%7C0&utm_content=exact_brand&utm_term=team%20viewer&msclkid=d00b9f3d517c15674353fb3646c69cd3"
                    target="_blank"
                  >
                    <div className={styles.imgComponent}>
                      <img
                        src="/images/TeamViewer.png"
                        alt="TeamViewer"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  Anydesk
                  <a href="https://anydesk.com/it" target="_blank" rel="noreferrer">
                    <div className={styles.imgComponent}>
                      <img
                        src="/images/anydesk.png"
                        alt="anydesk"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </a>
                </li>
              </ol>
              <p style={{marginTop: 50}}>
                <span style={{ color: "red" }}>Nota : </span>L'utilizzo del
                servizio prevede l'accettazione dei nostri termini e le
                condizioni di utilizzo del software di assistenza remota
              </p>
            </div>
          )}
        </div>
        <div className={styles.contactFrom}>
          <form>
            <h2>Send Message</h2>
            <div className={styles.inputBox}>
              <input type="text" name="" required="required" />
              <span>Nome</span>
            </div>
            <div className={styles.inputBox}>
              <input type="text" name="" required="required" />
              <span>Cognome</span>
            </div>
            <div className={styles.inputBox}>
              <input type="text" name="" required="required" />
              <span>Azienda</span>
            </div>
            <div className={styles.inputBox}>
              <input type="text" name="" required="required" />
              <span>Ruolo</span>
            </div>
            <div className={styles.inputBox}>
              <input type="email" name="" required="required" />
              <span>E-mail</span>
            </div>
            <div className={styles.inputBox}>
              <input type="number" name="" required="required" />
              <span>Telefono</span>
            </div>
            <div className={styles.inputBox}>
              <textarea required="required" rows={3}></textarea>
              <span>Messaggio</span>
            </div>
            <div className={styles.inputCheckbox}>
              <input type="checkbox" value="Invia Richiesta" />
              <span>
                Accetto che le informazioni siano utilizzate per contattarmi a
                finalità di marketing
              </span>
            </div>
            <div className={styles.inputBox}>
              <input type="submit" value="Invia Richiesta" />
            </div>
          </form>
        </div>
      </div>

      {isMobile && (
        <div className={styles.calling_block}>
          <div className={styles.urgent_txt_block}>
            <div className={styles.callIcon}>
              <IoCallOutline color="#fff" />
            </div>

            <div>
              <h2 className={styles.urgent_txt}>
                Hai un problema urgente che possiamo aiutarti a risolvere? Ci
                colleghiamo in remoto entro 24 ore!
              </h2>
              <div className={styles.underline} />
            </div>
          </div>

          <ol className={styles.sci}>
            <li>
              Team Viewer
              <a
                href="https://www.teamviewer.com/it/?utm_source=bing&utm_medium=cpc&utm_campaign=it%7Cb%7Cpr%7C21%7Csep%7Cexact-brand-only-sn%7Cfree%7Ct0%7C0&utm_content=exact_brand&utm_term=team%20viewer&msclkid=d00b9f3d517c15674353fb3646c69cd3"
                target="_blank"
              >
                <div className={styles.imgComponent}>
                  <img
                    src="/images/TeamViewer.png"
                    alt="TeamViewer"
                    width="100%"
                    height="100%"
                  />
                </div>
              </a>
            </li>
            <li>
              Anydesk
              <a href="https://anydesk.com/it" target="_blank" rel="noreferrer">
                <div className={styles.imgComponent}>
                  <img
                    src="/images/anydesk.png"
                    alt="anydesk"
                    width="100%"
                    height="100%"
                  />
                </div>
              </a>
            </li>
          </ol>
          <p style={{marginTop: 20}}>
            <span style={{ color: "red" }}>Nota : </span>L'utilizzo del servizio
            prevede l'accettazione dei nostri termini e le condizioni di
            utilizzo del software di assistenza remota
          </p>
        </div>
      )}
    </section>
  );
};

export default Contact;
