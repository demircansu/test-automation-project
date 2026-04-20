
# Test Automation Project

Bu proje, [SauceDemo](https://www.saucedemo.com/) e-ticaret uygulaması üzerinde Playwright kullanılarak hazırlanmış bir test otomasyon projesidir.

## Özellikler

- **Playwright** ile UI ve API test otomasyonu
- **Page Object Model (POM)** mimarisi
- Login, sepet, ödeme gibi temel akışların testleri
- Paralel test çalıştırma ve HTML raporlama

## Klasör Yapısı

- `pages/`    : Sayfa nesneleri (Page Object'ler)
- `tests/`    : Test senaryoları (UI ve API)
- `fixtures/` : Ortak test yapılandırmaları (base test)
- `playwright.config.ts` : Playwright yapılandırma dosyası

## Kurulum

1. Bağımlılıkları yükleyin:
	```bash
	npm install
	```

2. Testleri çalıştırmak için:
	```bash
	npx playwright test
	```

3. Testleri tarayıcı arayüzüyle (headed) çalıştırmak için:
	```bash
	npx playwright test --headed
	```

4. Belirli bir testi çalıştırmak için:
	```bash
	npx playwright test tests/login.spec.ts
	```

## Raporlama

Test çalıştıktan sonra HTML raporunu görüntülemek için:

```bash
npx playwright show-report
```

## Katkıda Bulunanlar

Bu proje [Playwright](https://playwright.dev/) ve TypeScript kullanılarak geliştirilmiştir.

---

GitHub: [https://github.com/demircansu/test-automation-project](https://github.com/demircansu/test-automation-project)
