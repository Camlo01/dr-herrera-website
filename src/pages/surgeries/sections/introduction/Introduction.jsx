
import './introduction.css'

function IntroductionSection() {
    return (
        <section className="introduction-section">
            <p>La cirugía bariátrica contempla un gran número de cirugías aprobadas, dentro de estas las más comúnmente conocidas son: <a href="#Manga-gastrica">Manga (sleeve) gástrica</a> y <a href="#Bypass-gastrico">Bypass gástrico</a>. Ante el avance tecnológico y estudios sobre la fisiopatología del paciente obeso y sus comorbilidades, hay otras menos conocidas como: BAGUA (bypass gástrico de única anastomosis – mini bypass), SADI–S (Anastomosis única duodeno–ileal más gastrectomía vertical). Y una realizada en casos de reganacia de peso, conocida como cirugía de revisión.
            </p>
            <p>A través de estas página, conocerás las diferentes cirugías que tenemos.</p>

            <div className='content-section'>
                <p>Sección de Cirugías Bariatricas:</p>
                <ul>
                    <li>¿Qué es la cirugía bariátrica?</li>
                    <li>¿Porqué se realiza?</li>
                    <li>Manga Gástrica </li>
                    <li>Bypass Gástrico </li>
                    <li>BAGUA (bypass gástrico de única <br /> anastomosis – mini bypass) </li>
                    <li>Revisión Bariátrica </li>
                    <li>Cirugía Metabólica </li>
                </ul>
            </div>
        </section>
    );
}

export default IntroductionSection;