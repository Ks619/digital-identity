
import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Recommendations = () => {
  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Recommendation Letters</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-lg mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Yaniv Development Team Lead</h2>
              <div className="max-w-4xl mx-auto text-right" dir="rtl" lang="he">
                <p className="mb-4">
                  רציתי לשתף המלצה חמה על כפיר שוסטר, שעבד איתי כשנה. הוא התחיל אצלנו כראש צוות QA, אבל לא לקח הרבה זמן עד שראינו את הפוטנציאל שלו, והוא עבר לתפקיד של מפתח אוטומציות בפייתון.
                </p>
                <p className="mb-4">
                  כפיר הוא מישהו שאפשר לסמוך עליו – הוא לומד מהר, ניגש לכל משימה בגישה חיובית, ויודע לקחת אחריות אמיתית. הוא לא חושש להתמודד עם אתגרים טכניים, ומשלב בין הבנה מעשית לבין יכולת לעבוד כחלק מצוות.
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

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Aviv Development Team Lead</h2>
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
