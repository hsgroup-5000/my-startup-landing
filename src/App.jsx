const sections = [
  {
    title: '에어비앤비 가능한 집, 지금 찾기',
    subtitle:
      '매물은 많아도 숙박 운영이 가능한 집은 찾기 어렵습니다. 지역과 예산에 맞는 후보만 골라드립니다.',
    cta: '원하는 지역 매물 리스트 받아보기',
    secondary: '사전 신청하기',
    kind: 'hero',
  },
  {
    title: '매물은 많지만, 돈 되는 집은 찾기 어렵습니다',
    bullets: [
      '일반 매물 사이트에는 숙박 운영 가능 여부가 보이지 않습니다.',
      '지역별 규제와 수익 구조가 달라서 섣부른 선택이 위험합니다.',
      '집의 가격만 보고 결정하면 실수하기 쉽습니다.',
    ],
    kind: 'problem',
  },
  {
    title: '에어비앤비 가능한 매물을 빠르게 찾는 법',
    features: [
      { label: '지역별 필터', text: '관심 지역과 예산에 맞는 매물을 빠르게 걸러줍니다.' },
      { label: '운영 가능 여부', text: '숙박 운영이 가능한 매물만 우선적으로 보여드립니다.' },
      { label: '수익성 요약', text: '월 예상 수익과 비용 구조를 한눈에 확인할 수 있습니다.' },
      { label: '맞춤 추천', text: '내 조건에 맞는 후보를 추천해드립니다.' },
    ],
    kind: 'feature',
  },
  {
    title: '3단계로 간단하게',
    steps: ['1. 원하는 지역 선택', '2. 예산과 조건 설정', '3. 에어비앤비 가능한 매물 확인'],
    kind: 'steps',
  },
  {
    title: '일반 부동산 앱과 다른 점',
    points: [
      '일반 앱은 집 정보 중심입니다.',
      '우리 서비스는 숙박 운영이 가능한 집을 찾는 데 초점을 둡니다.',
      '매물 찾는 것 자체가 어렵다는 고민을 줄여드립니다.',
    ],
    kind: 'difference',
  },
  {
    title: '분석은 참고용, 최종 확인은 별도',
    text: '예상 수익과 지역 분석은 참고용 추정치이며, 법률, 인허가, 임대인 동의, 실제 운영 조건은 최종 확인이 필요합니다.',
    kind: 'trust',
  },
];

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">에어비앤비 매물 찾기</div>
        <nav>
          <a href="#features">기능</a>
          <a href="#how">사용법</a>
          <a href="#trust">신뢰</a>
        </nav>
        <button className="primary-btn">사전 신청</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="badge">에어비앤비 가능한 매물만 골라서 보여주는 서비스</span>
            <h1>에어비앤비 가능한 집, 지금 찾기</h1>
            <p>
              매물은 많아도 숙박 운영이 가능한 집은 찾기 어렵습니다.
              지역과 예산에 맞는 후보만 골라드립니다.
            </p>
            <div className="cta-row">
              <button className="primary-btn">원하는 지역 매물 리스트 받아보기</button>
              <button className="secondary-btn">사전 신청하기</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="mini-label">지역별 매물 추천</div>
            <ul>
              <li>강남권 · 월세 낮음 · 수익성 우수</li>
              <li>마포구 · 호캉스 수요 높음</li>
              <li>부산 해운대 · 관광객 수요 지속</li>
            </ul>
            <div className="score-row">
              <span>수익성</span>
              <strong>85점</strong>
            </div>
          </div>
        </section>

        {sections.slice(1).map((section, index) => (
          <section key={index} className={`section ${section.kind}`}>
            <div className="section-inner">
              <h2>{section.title}</h2>

              {section.bullets && (
                <ul className="bullet-list">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.features && (
                <div className="feature-grid">
                  {section.features.map((feature) => (
                    <div className="feature-card" key={feature.label}>
                      <h3>{feature.label}</h3>
                      <p>{feature.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.steps && (
                <div className="step-list">
                  {section.steps.map((step) => (
                    <div className="step" key={step}>{step}</div>
                  ))}
                </div>
              )}

              {section.points && (
                <ul className="bullet-list">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              {section.text && <p className="lead">{section.text}</p>}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>에어비앤비 매물 찾기</div>
          <button className="primary-btn">원하는 지역 매물 리스트 받아보기</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
