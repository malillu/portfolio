import { AboutItem, AboutSection, HackathonList, QualificationList, SkillList } from "components"

const contents = [
  {
    title: "株式会社Porme",
    since: "2019.08",
    until: "2019.11",
    body: "友人の起業したスタートアップでバックエンドエンジニアとして携わる。主にRailsを使用。",
  },
  {
    title: "株式会社Palan",
    since: "2019.12",
    until: "now",
    body:
      "バックエンド(3ヶ月)→モバイル(１年)→フロントエンド(半年)と一通り経験。Rails、React Native、Blitz.js、GraphQLなどを使用。",
    isActive: true,
  },
  {
    title: "Appify Technologies, Inc.",
    since: "2021.05",
    until: "2021.08",
    body: "フロントエンド。ReactやGraphQLを使用。",
  },
  {
    title: "株式会社サイバーエージェント",
    since: "2021.06",
    body: "Amebaマンガでパフォーマンスを改善。Reactを使用。",
  },
  {
    title: "株式会社メルカリ",
    since: "2021.08",
    until: "2021.09",
    body: "メルカリのweb版でフロントエンドをやる。Reactを使用。",
  },
  {
    title: "ピクシブ株式会社",
    since: "2021.10",
    until: "2021.11",
    body: "pixiv小説でフロントエンドとバックエンドをやる。React、Vue、PHPを使用。",
  },
  {
    title: "株式会社Flatt Security",
    since: "2021.11",
    until: "now",
    body: "TODO",
    isActive: true,
  },
  {
    title: "奈良先端科学技術大学院大学(NAIST)",
    since: "2022.2",
    until: "2022.3",
    body: "情報セキュリティ工学研究室",
  },
]

export const About = () => {
  return (
    <>
      <AboutSection title="Education">
        <div className="pb-8 prose">
          <ul>
            <li>東京大学工学部３年</li>
          </ul>
        </div>
      </AboutSection>
      <AboutSection title="Career">
        <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
          {contents.map((content, i) => (
            <AboutItem
              since={content.since}
              until={content.until}
              title={content.title}
              body={content.body}
              key={i}
              isLast={contents.length === i + 1}
              isFirst={i === 0}
              isActive={content.isActive}
            />
          ))}
        </ul>
      </AboutSection>
      <AboutSection title="Qualifications">
        <QualificationList />
      </AboutSection>
      <AboutSection title="Hackathon">
        <HackathonList />
      </AboutSection>

      <AboutSection title="Skills">
        <SkillList />
      </AboutSection>
    </>
  )
}