import React from 'react';
import shield from '../../assets/gl_shield-20x20.png';
import cash from '../../assets/gl_cash-20x20.png';
import hospital from '../../assets/gl_hospital-20x20.png';
import mobile from '../../assets/gl_mobile-20x20.png';
import correct from '../../assets/gl_correct.png';
import illustration from '../../assets/illustration.png';
import base from '../../assets/base.png';
import sombra from '../../assets/sombra.png';


export const Shield = (props) => <img {...props} src={shield} alt="este es un icono que representa seguridad" />
export const Cash = (props) => <img {...props} src={cash} alt="este es un icono que representa beneficios monetarios" />
export const Hospital = (props) => <img {...props} src={hospital} alt="este es un icono que representa el soporte médico" />
export const Mobile = (props) => <img {...props} src={mobile} alt="este es un icono que representa la accesibilidad del producto" />
export const Correct = (props) => <img {...props} src={correct} alt="este es un icono, el cual indica que el proceso se realizó correctamente" />
export const Illustration = (props) => <img {...props} src={illustration} alt="este es un icono que representa un plan de seguro" />
export const Base = (props) => <img {...props} src={base} alt="" />
export const Sombra = (props) => <img {...props} src={sombra} alt="" />