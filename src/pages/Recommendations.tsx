
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Recommendations = () => {
  return (
    <MainLayout>
      <Hero title="Recommendation Letters" />

      <section className="py-16 bg-gradient-to-b from-white to-tech-100/30">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-lg mb-12 bg-white/70 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-tech-500">Yaniv Development Team Lead</h2>
              <div className="max-w-4xl mx-auto text-right" dir="rtl" lang="he">
                <p className="mb-4">
                  רציתי לשתף המלצה חמה על כפיר שוסטר, שעבד איתי כשנה. הוא התחיל אצלנו כראש צוות QA, אבל לא לקח הרבה זמן עד שראינו את הפוטנציאל שלו, והוא עבר לתפקיד של מפתח אוטומציות בפייתון.
                </p>
                <p className="mb-4">
                  כפיר הוא מישהו שאפשר לסמוך עליו, הוא לומד מהר, ניגש לכל משימה בגישה חיובית, ויודע לקחת אחריות אמיתית. הוא לא חושש להתמודד עם אתגרים טכניים, ומשלב בין הבנה מעשית לבין יכולת לעבוד כחלק מצוות.
                </p>
                <p className="mb-4">
                  כפיר בלט גם ביחסי האנוש שלו, בגישה החיובית ובעבודה המשותפת עם צוותים שונים בחברה. תמיד היה נעים לעבוד איתו, והוא תרם לאווירה מקצועית ופתוחה בצוות.
                </p>
                <p>
                  אני ממליץ עליו בלב שלם, בטוח שהוא יתרום לכל צוות שיצטרף אליו, ומאחל לו הצלחה רבה בהמשך.
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12 max-w-2xl mx-auto" />

          <Card className="border-none shadow-lg bg-white/70 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-tech-500">Aviv Development Team Lead</h2>
              <div className="max-w-4xl mx-auto text-right" dir="rtl" lang="he">
                <p className="mb-4">
                  אני שמחה להמליץ על כפיר שוסטר, שעבד לצידי במשך תקופה משמעותית. בתחילת דרכו בחברה הוא עסק בבדיקות תוכנה, ובהמשך עבר לתפקיד פיתוח, בו עבד תחתיי באופן ישיר כמפתח אוטומציות בשפת פייתון.
                </p>
                <p className="mb-4">
                  כפיר הראה לאורך כל הדרך מחויבות גבוהה, סקרנות מקצועית וגישה עצמאית לפתרון בעיות. הוא ניגש למשימות בצורה מדויקת, עם הבנה מעמיקה של הדרישות הטכניות, וביצע אותן ברמה גבוהה תוך שמירה על שיתוף פעולה עם חברי הצוות.
                </p>
                <p className="mb-4">
                  הוא מביא איתו אנרגיה חיובית, תקשורת נעימה ונכונות לעזור, מה שתורם לא רק לתוצאה המקצועית, אלא גם לדינמיקה הקבוצתית. העבודה איתו תמיד הייתה זורמת ונעימה.
                </p>
                <p>
                  אני בטוחה שכפיר יהווה חיזוק משמעותי בכל מסגרת פיתוח, ממליצה עליו בחום!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default Recommendations;
