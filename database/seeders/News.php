<?php

namespace Database\Seeders;

use App\Models\News as ModelsNews;
use Illuminate\Database\Seeder;

class news extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        ModelsNews::insert([
            [
                'title' => 'Government Announces New Policy Changes',
                'description' => 'The government has announced significant changes to current policies to improve the economy and welfare.',
                'slug' => 'government-announces-new-policy-changes',
                'content' => 'The latest policy changes focus on tax reforms, healthcare, and education. These policies are expected to bring positive impacts in the coming months.',
                'author_id' => 1,
                'meta_title' => 'Government Policy Update',
                'meta_description' => 'Details about the new government policy changes.',
                'meta_keywords' => 'politics, government, policy, reform',
                'category' => 'Politics',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'National Team Secures Victory in World Cup Finals',
                'description' => 'The national football team has won the World Cup after a thrilling match against their rivals.',
                'slug' => 'national-team-secures-victory-world-cup',
                'content' => 'The team?s performance was outstanding, with a decisive goal in the final minutes securing their victory.',
                'author_id' => 3,
                'meta_title' => 'Historic World Cup Win',
                'meta_description' => 'National team celebrates a historic World Cup victory.',
                'meta_keywords' => 'sports, football, world cup, victory',
                'category' => 'Sports',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'Celebrity Couple Ties the Knot in Lavish Ceremony',
                'description' => 'A famous celebrity couple has officially tied the knot in a star-studded event attended by hundreds of guests.',
                'slug' => 'celebrity-couple-ties-the-knot',
                'content' => 'The wedding was held at a luxury resort, featuring stunning decorations and performances by top artists.',
                'author_id' => 4,
                'meta_title' => 'Celebrity Wedding Event',
                'meta_description' => 'Details about the luxurious wedding of the celebrity couple.',
                'meta_keywords' => 'entertainment, wedding, celebrity, event',
                'category' => 'Entertainment',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'Stock Market Hits Record High Amid Economic Growth',
                'description' => 'The stock market reached an all-time high today as investors remain optimistic about the country?s economic growth.',
                'slug' => 'stock-market-hits-record-high',
                'content' => 'Experts attribute this growth to strong corporate earnings and improved global trade relations.',
                'author_id' => 5,
                'meta_title' => 'Stock Market Peaks',
                'meta_description' => 'Stock market reaches new heights amid economic optimism.',
                'meta_keywords' => 'finance, stock market, economy, growth',
                'category' =>  'Finance',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
