import React, { FunctionComponent } from 'react';
import { GridItemHorizontal } from '../../components/GridItemHorizontal/GridItemHorizontal';
import { GridItemVertical, VerticalImgPosition } from '../../components/GridItemVertical/GridItemVertical';
import classes from './PhotoPage.module.scss';

export const PhotoPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <GridItemVertical
        verticalImgPath={
          'https://1.downloader.disk.yandex.ru/preview/0c9d4867bb64f1b6f61b34fa318b1cefdbb7dceb52e47e685ee5add8bd36dda5/inf/dgxzU4alx__pa7NRUcmYuv2Lh7-wciBwmj5HEJoZQJfWHzk0UvSHnu02878eV-glCjehhnqQLWrN9oKufZY2Eg%3D%3D?uid=991811405&filename=DSC01622.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937'
        }
        horizontalImgPaths={[
          'https://4.downloader.disk.yandex.ru/preview/9e702c9c7ce4acc3b7c0b74eafccb7d11e7fb703e707c5ed86756c997de34f64/inf/-WAtbsFwphKzP4a6r-YPMqeRiZx_Fhmgy6Frkvyvu0ZaymGEUGdcakRR-TWqT-Rs0Wmjfbz_fEx_M-L6o9kq0A%3D%3D?uid=991811405&filename=DSC00334-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
          'https://downloader.disk.yandex.ru/preview/6cce24c76bd2b53094ea6e9089b5c8c0ee1aedbe053e450a1b840bd1def5dc6f/60aadf54/4BLMncWpDW0bNUmikUYlSP4w9ZqrDuTT3Ak1BpkSwWTR5eqnm8hvOIVV5w529RZs4p3gjREn9xf5trQKe6Nbuw%3D%3D?uid=0&filename=DSC01388.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
          'https://1.downloader.disk.yandex.ru/preview/70c9a0e94f863ea2215d3a614d7ef1a18d51a565d115bc95b4a37eb950bbc261/inf/htmh3Duke153zhswtPcjx_SVgIpl_ceBM5JyjRKk46j_Fr2Nf3RvS7clJO-VUXZdb30mQO_Wj2iAgq9p7omzoQ%3D%3D?uid=991811405&filename=DSC00504.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
          'https://2.downloader.disk.yandex.ru/preview/6956b785cba43bf0d537107ffe491e8ff87d680840be61389764dc2edf4ab9f2/inf/xc-Cd5nwLSNMsEDsdBkoQpqLH_6M0_VVmyDA_obG57rTNibUF9ghbNCZCPD5LGns_VKsQR1mdlHfplgmwmZ7rQ%3D%3D?uid=991811405&filename=DSC00717.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
        ]}
        verticalImgPosition={VerticalImgPosition.Left}
      />
      <GridItemHorizontal
        horizontalImgPaths={[
          'https://3.downloader.disk.yandex.ru/preview/b2b0a7bc143469de54d11d4679eef378775484654db17bf4b4b7910b9eff72fd/inf/619g0bNIYN28WABnLppTrImWrpL02mI5vOT_mRjkt0QNhw_O6rUfQRoa-GZ51Xa6fzkWb3Qso94VvbSHJGMT9w%3D%3D?uid=991811405&filename=DSC01614.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
          'https://1.downloader.disk.yandex.ru/preview/3c57b52270397c648ad49c2f503afd6b85ebdca34d8c8002849642686c2e4cf9/inf/03KZwkAu-QrzhV1YKXW94NjiXAzky9bUxBwytvOqpXOEF3ZJt9vzdh6Y-SqJaddO-oDo3POsVYLn0DhzqQUygA%3D%3D?uid=991811405&filename=DSC01673.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
        ]}
      />
      <GridItemVertical
        verticalImgPath={
          'https://1.downloader.disk.yandex.ru/preview/0c9d4867bb64f1b6f61b34fa318b1cefdbb7dceb52e47e685ee5add8bd36dda5/inf/dgxzU4alx__pa7NRUcmYuv2Lh7-wciBwmj5HEJoZQJfWHzk0UvSHnu02878eV-glCjehhnqQLWrN9oKufZY2Eg%3D%3D?uid=991811405&filename=DSC01622.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937'
        }
        horizontalImgPaths={[
          'https://4.downloader.disk.yandex.ru/preview/9e702c9c7ce4acc3b7c0b74eafccb7d11e7fb703e707c5ed86756c997de34f64/inf/-WAtbsFwphKzP4a6r-YPMqeRiZx_Fhmgy6Frkvyvu0ZaymGEUGdcakRR-TWqT-Rs0Wmjfbz_fEx_M-L6o9kq0A%3D%3D?uid=991811405&filename=DSC00334-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
          'https://downloader.disk.yandex.ru/preview/6cce24c76bd2b53094ea6e9089b5c8c0ee1aedbe053e450a1b840bd1def5dc6f/60aadf54/4BLMncWpDW0bNUmikUYlSP4w9ZqrDuTT3Ak1BpkSwWTR5eqnm8hvOIVV5w529RZs4p3gjREn9xf5trQKe6Nbuw%3D%3D?uid=0&filename=DSC01388.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
          'https://1.downloader.disk.yandex.ru/preview/70c9a0e94f863ea2215d3a614d7ef1a18d51a565d115bc95b4a37eb950bbc261/inf/htmh3Duke153zhswtPcjx_SVgIpl_ceBM5JyjRKk46j_Fr2Nf3RvS7clJO-VUXZdb30mQO_Wj2iAgq9p7omzoQ%3D%3D?uid=991811405&filename=DSC00504.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
          'https://2.downloader.disk.yandex.ru/preview/6956b785cba43bf0d537107ffe491e8ff87d680840be61389764dc2edf4ab9f2/inf/xc-Cd5nwLSNMsEDsdBkoQpqLH_6M0_VVmyDA_obG57rTNibUF9ghbNCZCPD5LGns_VKsQR1mdlHfplgmwmZ7rQ%3D%3D?uid=991811405&filename=DSC00717.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
        ]}
        verticalImgPosition={VerticalImgPosition.Middle}
      />
      <GridItemHorizontal
        horizontalImgPaths={[
          'https://3.downloader.disk.yandex.ru/preview/b2b0a7bc143469de54d11d4679eef378775484654db17bf4b4b7910b9eff72fd/inf/619g0bNIYN28WABnLppTrImWrpL02mI5vOT_mRjkt0QNhw_O6rUfQRoa-GZ51Xa6fzkWb3Qso94VvbSHJGMT9w%3D%3D?uid=991811405&filename=DSC01614.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
          'https://1.downloader.disk.yandex.ru/preview/3c57b52270397c648ad49c2f503afd6b85ebdca34d8c8002849642686c2e4cf9/inf/03KZwkAu-QrzhV1YKXW94NjiXAzky9bUxBwytvOqpXOEF3ZJt9vzdh6Y-SqJaddO-oDo3POsVYLn0DhzqQUygA%3D%3D?uid=991811405&filename=DSC01673.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
        ]}
      />
      <GridItemVertical
        verticalImgPath={
          'https://1.downloader.disk.yandex.ru/preview/0c9d4867bb64f1b6f61b34fa318b1cefdbb7dceb52e47e685ee5add8bd36dda5/inf/dgxzU4alx__pa7NRUcmYuv2Lh7-wciBwmj5HEJoZQJfWHzk0UvSHnu02878eV-glCjehhnqQLWrN9oKufZY2Eg%3D%3D?uid=991811405&filename=DSC01622.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937'
        }
        horizontalImgPaths={[
          'https://4.downloader.disk.yandex.ru/preview/9e702c9c7ce4acc3b7c0b74eafccb7d11e7fb703e707c5ed86756c997de34f64/inf/-WAtbsFwphKzP4a6r-YPMqeRiZx_Fhmgy6Frkvyvu0ZaymGEUGdcakRR-TWqT-Rs0Wmjfbz_fEx_M-L6o9kq0A%3D%3D?uid=991811405&filename=DSC00334-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
          'https://downloader.disk.yandex.ru/preview/6cce24c76bd2b53094ea6e9089b5c8c0ee1aedbe053e450a1b840bd1def5dc6f/60aadf54/4BLMncWpDW0bNUmikUYlSP4w9ZqrDuTT3Ak1BpkSwWTR5eqnm8hvOIVV5w529RZs4p3gjREn9xf5trQKe6Nbuw%3D%3D?uid=0&filename=DSC01388.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
          'https://1.downloader.disk.yandex.ru/preview/70c9a0e94f863ea2215d3a614d7ef1a18d51a565d115bc95b4a37eb950bbc261/inf/htmh3Duke153zhswtPcjx_SVgIpl_ceBM5JyjRKk46j_Fr2Nf3RvS7clJO-VUXZdb30mQO_Wj2iAgq9p7omzoQ%3D%3D?uid=991811405&filename=DSC00504.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
          'https://2.downloader.disk.yandex.ru/preview/6956b785cba43bf0d537107ffe491e8ff87d680840be61389764dc2edf4ab9f2/inf/xc-Cd5nwLSNMsEDsdBkoQpqLH_6M0_VVmyDA_obG57rTNibUF9ghbNCZCPD5LGns_VKsQR1mdlHfplgmwmZ7rQ%3D%3D?uid=991811405&filename=DSC00717.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
        ]}
        verticalImgPosition={VerticalImgPosition.Right}
      />
      <GridItemHorizontal
        horizontalImgPaths={[
          'https://3.downloader.disk.yandex.ru/preview/b2b0a7bc143469de54d11d4679eef378775484654db17bf4b4b7910b9eff72fd/inf/619g0bNIYN28WABnLppTrImWrpL02mI5vOT_mRjkt0QNhw_O6rUfQRoa-GZ51Xa6fzkWb3Qso94VvbSHJGMT9w%3D%3D?uid=991811405&filename=DSC01614.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
          'https://1.downloader.disk.yandex.ru/preview/3c57b52270397c648ad49c2f503afd6b85ebdca34d8c8002849642686c2e4cf9/inf/03KZwkAu-QrzhV1YKXW94NjiXAzky9bUxBwytvOqpXOEF3ZJt9vzdh6Y-SqJaddO-oDo3POsVYLn0DhzqQUygA%3D%3D?uid=991811405&filename=DSC01673.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=991811405&tknv=v2&size=1903x937',
        ]}
      />
    </div>
  );
};
