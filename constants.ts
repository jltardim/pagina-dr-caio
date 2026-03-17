
import { Brain, BedDouble, Zap, Navigation, Hand, BookOpen, Dumbbell, Eye, Search, ShieldCheck, Microscope, Award, UserCheck, HeartPulse, Stethoscope } from 'lucide-react';

export const PHONE_NUMBER = "5521000000000"; // TODO: Substituir pelo número real do Dr. Caio
export const PHONE_DISPLAY = "(21) 00000-0000"; // TODO: Substituir pelo número real
export const ADDRESS = "Avenida Rio Branco 181, 2º andar, sala 204, Centro, Rio de Janeiro - RJ, 20040-007";
export const ADDRESS_2 = "Hospital São Vicente de Paulo, R. Dr. Satamini 333, Tijuca, Rio de Janeiro - RJ, 20270-233";
export const ADDRESS_SHORT = "Av. Rio Branco 181 - Centro, Rio de Janeiro/RJ";
export const EMAIL_CONTACT = ""; // TODO: Adicionar email do Dr. Caio se tiver
export const CNPJ = "34.257.593/0001-98";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Avenida+Rio+Branco+181+Centro+Rio+de+Janeiro";
export const GOOGLE_MAPS_LINK_2 = "https://www.google.com/maps/search/?api=1&query=Hospital+São+Vicente+de+Paulo+R.+Dr.+Satamini+333+Tijuca+Rio+de+Janeiro";

// Images
export const LOGO_IMG_SRC = "/images/logo.png"; 
export const HERO_IMG_SRC = "/images/hero.png"; 
export const OFFICE_IMG_SRC = "/images/office.jpg"; 
export const ABOUT_IMG_SRC = "/images/about.png";

// Sintomas - "Quando você deve me procurar"
export const SYMPTOMS_LIST = [
  { 
    title: "Dores de cabeça e enxaquecas frequentes ou persistentes", 
    icon: Brain,
    description: "Cefaleia e enxaqueca são condições neurológicas que podem ser investigadas e acompanhadas para controle adequado dos episódios e melhora da qualidade de vida."
  },
  { 
    title: "Insônia ou dificuldade para dormir", 
    icon: BedDouble,
    description: "Distúrbios do sono como insônia podem ter origem neurológica e exigem avaliação especializada para identificar as causas e orientar o tratamento correto."
  },
  { 
    title: "Formigamentos ou dormências em braços, pernas ou face", 
    icon: Zap,
    description: "Parestesias podem ser sintomas de neuropatias periféricas ou outras condições neurológicas que requerem investigação para diagnóstico preciso."
  },
  { 
    title: "Tremores ou alterações de movimento", 
    icon: Hand,
    description: "Tremores podem estar associados a diversas condições neurológicas, incluindo doença de Parkinson e outros distúrbios do movimento que necessitam acompanhamento."
  },
  { 
    title: "Alterações de memória ou concentração", 
    icon: BookOpen,
    description: "Dificuldades cognitivas podem ter diversas causas neurológicas e merecem avaliação especializada para diagnóstico diferencial e orientação terapêutica."
  },
  { 
    title: "Tonturas ou desequilíbrio", 
    icon: Navigation,
    description: "Vertigens e desequilíbrio podem ter origem no sistema nervoso e necessitam de avaliação neurológica para identificação da causa e condução adequada."
  },
  { 
    title: "Fraqueza e espasmos musculares", 
    icon: Dumbbell,
    description: "Fraqueza muscular progressiva ou espasmos podem indicar condições neuromusculares que exigem investigação e acompanhamento neurológico."
  },
  { 
    title: "Visão dupla ou borrada", 
    icon: Eye,
    description: "Alterações visuais ligadas a sintomas neurológicos podem indicar comprometimento de nervos cranianos ou outras condições que necessitam avaliação especializada."
  }
];

// Doenças neurológicas comuns
export const DISEASES_COMMON = [
  "Cefaleia",
  "Doença de Parkinson",
  "Doença de Alzheimer",
  "Tremor",
  "Acidente Vascular Cerebral (AVC)",
  "Distúrbios do movimento"
];

// Outras condições neurológicas
export const DISEASES_OTHER = [
  "Neuropatias periféricas",
  "Alterações sensoriais como formigamentos",
  "Miopatias",
  "Distúrbios neurológicos em investigação"
];

// Neuroimunologia
export const NEUROIMMUNOLOGY_LIST = [
  { name: "Esclerose múltipla", icon: Microscope },
  { name: "Neuromielite óptica", icon: Eye },
  { name: "Encefalites autoimunes", icon: ShieldCheck },
  { name: "Doenças associadas ao anticorpo anti-MOG", icon: Search },
  { name: "Miastenia gravis", icon: HeartPulse }
];

export const BENEFITS_LIST = [
  { title: "Investigação clínica minuciosa", desc: "Avaliação neurológica completa com atenção aos detalhes e raciocínio clínico estruturado.", icon: Search },
  { title: "Segurança no diagnóstico", desc: "Atuação ativa em ensino e pesquisa na área de neurologia e neuroimunologia, contribuindo para uma prática clínica sempre atualizada.", icon: ShieldCheck },
  { title: "Experiência em doenças complexas", desc: "Acompanhamento de condições que exigem monitoramento contínuo e estratégias terapêuticas específicas.", icon: Stethoscope },
  { title: "Atendimento humanizado", desc: "Escuta atenta, explicações claras e planejamento terapêutico individualizado.", icon: HeartPulse }
];

// Steps do atendimento
export const STEPS_LIST = [
  {
    number: "01",
    title: "Agendamento pelo WhatsApp",
    description: "O primeiro contato é feito pelo WhatsApp, onde são alinhados os horários disponíveis e as orientações iniciais para a consulta. Caso possua exames, o paciente pode levá-los para avaliação."
  },
  {
    number: "02",
    title: "Consulta detalhada",
    description: "A consulta começa com uma conversa clínica aprofundada sobre os sintomas, histórico médico e evolução do quadro, permitindo uma compreensão global da condição do paciente."
  },
  {
    number: "03",
    title: "Exame neurológico completo",
    description: "Durante a consulta, é realizado um exame neurológico minucioso, avaliando força muscular, sensibilidade, reflexos, coordenação motora, equilíbrio, marcha, nervos cranianos e funções cognitivas. Exames já realizados também são analisados nesse momento."
  },
  {
    number: "04",
    title: "Plano de tratamento individualizado",
    description: "Com base na avaliação clínica e nos achados do exame neurológico, é definido um plano de tratamento individualizado, que pode incluir ajustes de medicação, solicitação de exames ou outras condutas terapêuticas."
  },
  {
    number: "05",
    title: "Orientação e suporte após a consulta",
    description: "Após a consulta, o paciente pode contar com orientações pontuais pelo WhatsApp quando necessário. Caso seja indicada uma reavaliação clínica, uma nova consulta pode ser realizada para acompanhamento do quadro."
  }
];

// FAQ
export const FAQ_LIST = [
  {
    question: "Preciso de encaminhamento para consultar com neurologista?",
    answer: "Não necessariamente. A consulta pode ser agendada diretamente pelo paciente sempre que houver sintomas neurológicos ou necessidade de avaliação especializada."
  },
  {
    question: "Quais exames devo levar para a consulta?",
    answer: "Se você já possui exames anteriores (ressonância magnética, tomografia, exames de sangue, eletroencefalograma, entre outros), leve-os para a consulta. Caso não tenha exames, o médico solicitará os que forem necessários durante a avaliação."
  },
  {
    question: "O neurologista solicita exames durante a consulta?",
    answer: "Sim, quando necessário, exames complementares podem ser solicitados para auxiliar no diagnóstico e no acompanhamento do tratamento."
  },
  {
    question: "Distúrbios do sono podem ser avaliados por neurologista?",
    answer: "Sim. Insônia e outros distúrbios do sono podem ter origem neurológica e são avaliados na consulta neurológica."
  },
  {
    question: "O atendimento é indicado apenas para doenças neurológicas já diagnosticadas?",
    answer: "Não. A consulta neurológica é indicada tanto para investigação de sintomas quanto para acompanhamento de condições já diagnosticadas."
  },
  {
    question: "A consulta demora muito tempo?",
    answer: "A primeira consulta costuma ser mais longa por envolver uma avaliação completa. O tempo pode variar de acordo com a complexidade do caso."
  },
  {
    question: "O atendimento é para adultos ou crianças?",
    answer: "O atendimento é voltado para pacientes adultos."
  },
  {
    question: "A consulta contempla direito a retorno?",
    answer: "Sim, consultas de retorno podem ser agendadas para acompanhamento do quadro clínico e ajustes terapêuticos quando necessário."
  }
];
