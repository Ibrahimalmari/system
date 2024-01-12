<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id',
        'image',
        'created_by',

    ];

    public function category(){
        return  $this->belongsTo(Category::class);
     }

     public function create_branch_seller()
     {
         return $this->belongsTo(SellerMan::class);
     }
}
