var wms_layers = [];

var format_ADMINISTRASI_LN_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_0 = format_ADMINISTRASI_LN_25K_0.readFeatures(json_ADMINISTRASI_LN_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_0.addFeatures(features_ADMINISTRASI_LN_25K_0);
var lyr_ADMINISTRASI_LN_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_25K_0, 
                style: style_ADMINISTRASI_LN_25K_0,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_0.png" /> ADMINISTRASI_LN_25K'
            });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> 0<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> Ambarketawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> Argomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> Argosari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> Baciro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> Balecatur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> Balerante<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> Banguncipto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> Bangunjiwo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> Bangunkerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> Banguntapan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> Banjararum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> Banjarharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> Banjarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> Banyuraden<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> Banyurejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> Baturetno<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> Bawukan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> Bener<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> Bimomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> Bligo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> Bokoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> Bugisan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> Candibinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> Caturharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> Caturtunggal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> Cokrodiningratan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> Condongcatur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> Demangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> Donoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> Donokerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> Gayamharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> Girikerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> Glagaharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> Hargobinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> Harjobinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> Jatisarono<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> Jogotirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> Kalitirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> Kaliurang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> Karangwaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> Katekan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> Kebondalem Kidul<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> Kembang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> Kemiren<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> Kepuharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> Kepurun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> Kerten<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> Klitren<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> Kokosan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> Kotesan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> Kranggan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> Kricak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> Leses<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> Lumbungrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> Madurejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_56.png" /> Maguwoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_57.png" /> Margoagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_58.png" /> Margodadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_59.png" /> Margokaton<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_60.png" /> Margoluwih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_61.png" /> Margomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_62.png" /> Margorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_63.png" /> Merdikorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_64.png" /> Minomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_65.png" /> Mororejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_66.png" /> Mujamuju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_67.png" /> Ngablak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_68.png" /> Ngestiharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_69.png" /> Nglumut<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_70.png" /> Ngoro-Oro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_71.png" /> Nogotirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_72.png" /> Pakembinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_73.png" /> Pakunden<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_74.png" /> Pandowoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_75.png" /> Panggang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_76.png" /> Pereng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_77.png" /> Pondokrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_78.png" /> Potorono<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_79.png" /> Purwobinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_80.png" /> Purwomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_81.png" /> Salam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_82.png" /> Sambirejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_83.png" /> Sardonoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_84.png" /> Sariharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_85.png" /> Selomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_86.png" /> Sendangadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_87.png" /> Sendangagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_88.png" /> Sendangarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_89.png" /> Sendangmulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_90.png" /> Sendangrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_91.png" /> Sendangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_92.png" /> Sendangtirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_93.png" /> Sengon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_94.png" /> Serut<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_95.png" /> Sidoagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_96.png" /> Sidoarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_97.png" /> Sidokarto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_98.png" /> Sidoluhur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_99.png" /> Sidomoyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_100.png" /> Sidomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_101.png" /> Sidorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_102.png" /> Sinduadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_103.png" /> Sinduharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_104.png" /> Sindumartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_105.png" /> Sitimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_106.png" /> Somokaton<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_107.png" /> Srimartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_108.png" /> Srimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_109.png" /> Sudimoro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_110.png" /> Sukoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_111.png" /> Sumberadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_112.png" /> Sumberagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_113.png" /> Sumberarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_114.png" /> Sumberharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_115.png" /> Sumberrahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_116.png" /> Sumberrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_117.png" /> Sumbersari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_118.png" /> Tamanmartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_119.png" /> Tamantirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_120.png" /> Tambakrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_121.png" /> Taskombang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_122.png" /> Tegaltirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_123.png" /> Terban<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_124.png" /> Tirtoadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_125.png" /> Tirtomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_126.png" /> Tlogo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_127.png" /> Tlogoadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_128.png" /> Tridadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_129.png" /> Trihanggo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_130.png" /> Triharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_131.png" /> Trimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_132.png" /> Umbulharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_133.png" /> Umbulmartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_134.png" /> Wedomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_135.png" /> Widodomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_136.png" /> Wijimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_137.png" /> Wonokerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_138.png" /> Wukirharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_139.png" /> Wukirsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_140.png" /> <br />'
        });

lyr_ADMINISTRASI_LN_25K_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);
var layersList = [lyr_ADMINISTRASI_LN_25K_0,lyr_ADMINISTRASIDESA_AR_25K_1];
lyr_ADMINISTRASI_LN_25K_0.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_0.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_0.set('fieldLabels', {'KARKTR': 'inline label', 'STSBTS': 'inline label', 'FCODE': 'inline label', 'KELAS': 'inline label', 'UUPP': 'inline label', 'LOKASI': 'inline label', 'REMARK': 'inline label', 'NAMOBJ': 'inline label', 'ADMIN1': 'inline label', 'ADMIN2': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'WAKLD1': 'inline label', 'WAKLD2': 'inline label', 'WADKC1': 'inline label', 'WADKC2': 'inline label', 'WAKBK1': 'inline label', 'WAKBK2': 'inline label', 'WAPRO1': 'inline label', 'WAPRO2': 'inline label', 'TIPTBT': 'inline label', 'PJGBTS': 'inline label', 'KLBADM': 'inline label', 'TIPLOK': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KDPBPS': 'inline label', 'FCODE': 'inline label', 'LUASWH': 'inline label', 'UUPP': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'KDEBPS': 'inline label', 'KDEPUM': 'inline label', 'KDCBPS': 'inline label', 'KDCPUM': 'inline label', 'KDBBPS': 'inline label', 'KDBPUM': 'inline label', 'WADMKD': 'inline label', 'WIADKD': 'inline label', 'WADMKC': 'inline label', 'WIADKC': 'inline label', 'WADMKK': 'inline label', 'WIADKK': 'inline label', 'WADMPR': 'inline label', 'WIADPR': 'inline label', 'TIPADM': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});